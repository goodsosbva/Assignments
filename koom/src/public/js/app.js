const socket = io();

const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");
const cameraSelect = document.getElementById("cameras");
const call = document.getElementById("call");

// Welcome Form (join a room)
const welcome = document.getElementById("welcome");
const welcomeForm = document.querySelector("form");
const chatForm = document.querySelector("#chatForm");

call.hidden = true;

let myStream;
let muted = false;
let cameraOff = false;
let roomName;
let myPeerConnection;
let myDataChannel;

async function getCameras() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    const currentCamera = myStream.getVideoTracks()[0];
    cameras.forEach((camera) => {
      const option = document.createElement("option");
      option.value = camera.deviceId;
      option.innerText = camera.label;
      if (currentCamera.label === camera.label) {
        option.selected = true;
      }
      cameraSelect.appendChild(option);
    });
  } catch (e) {
    console.log(e);
  }
}

async function getMedia(deviceId) {
  const initialContraints = {
    audio: true,
    video: { facingMode: "user" },
  };
  const cameraContraints = {
    audio: true,
    video: { deviceId: { exact: deviceId } },
  };
  try {
    if (navigator.mediaDevices) {
      myStream = await navigator.mediaDevices.getUserMedia(
        deviceId ? cameraContraints : initialContraints
      );
      console.log(myStream);
      myFace.srcObject = myStream;
      if (!deviceId) {
        await getCameras();
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function handleMuteClick() {
  console.log(myStream.getAudioTracks());
  myStream
    .getAudioTracks()
    .forEach((track) => (track.enabled = !track.enabled));
  if (!muted) {
    muteBtn.innerText = "Unmute";
    muted = true;
  } else {
    muteBtn.innerText = "Mute";
    muted = false;
  }
}

function handleCameraClick() {
  myStream
    .getVideoTracks()
    .forEach((track) => (track.enabled = !track.enabled));
  if (!cameraOff) {
    cameraBtn.innerText = "Turn Camera On";
    cameraOff = true;
  } else {
    cameraBtn.innerText = "Turn Camera Off";
    cameraOff = false;
  }
}

async function handleCameraChange() {
  // console.log(cameraSelect.value);
  await getMedia(cameraSelect.value);

  if (myPeerConnection) {
    console.log(myPeerConnection.getSenders());
    const videoTrack = myStream.getVideoTracks()[0];
    const videoSender = myPeerConnection.getSenders().find((sender) => sender.track.kind === 'video');
    videoSender.replaceTrack(videoTrack);
  }
}

async function initCall() {
  welcome.hidden = true;
  call.hidden = false;
  await getMedia();
  makeConnection();
}

async function handleWelcomeSubmit(event) {
  event.preventDefault();
  const input = welcomeForm.querySelector("input");
  await initCall();
  socket.emit("join_room", input.value);
  roomName = input.value;
  input.value = "";
}

function handleChatSubmit(event) {
  event.preventDefault(event);
  const input = chatForm.querySelector("input");
  console.log('input >> ', input.value);
  myDataChannel.send(input.value);
  const chats = document.querySelector(".chats"); // 클래스 이름으로 가정
  const li = document.createElement("li");
  li.innerText = input.value;
  chats.appendChild(li);
  input.value = "";
}

// Socket Code
socket.on("welcome", async () => {
  // console.log("someome joined!");
  myDataChannel = myPeerConnection.createDataChannel("chat");
  myDataChannel.addEventListener("message", (event) => {
    console.log('message event >> ', event.data);
    const chats = document.querySelector(".chats"); // 클래스 이름으로 가정
    const li = document.createElement("li");
    li.innerText = event.data;
    chats.appendChild(li);
  });
  console.log("made data channel");
  const offer = await myPeerConnection.createOffer();
  await myPeerConnection.setLocalDescription(offer);
  console.log("sent the offer");
  socket.emit("offer", offer, roomName);
});

socket.on("offer", async (offer) => {
  myPeerConnection.addEventListener("datachannel", (e) => {
    myDataChannel = e.channel;
    myDataChannel.addEventListener("message", (e) => {
      console.log('send Data >>> ', e.data);
      const chats = document.querySelector(".chats"); // 클래스 이름으로 가정
      const li = document.createElement("li");
      li.innerText = e.data;
      chats.appendChild(li);
    })
  })
  console.log("received the offer");
  await myPeerConnection.setRemoteDescription(offer);
  const answer = await myPeerConnection.createAnswer();
  await myPeerConnection.setLocalDescription(answer);
  socket.emit("answer", answer, roomName);
  console.log("sent the answer");
});

socket.on("answer", answer => {
  console.log("received the answer");
  myPeerConnection.setRemoteDescription(answer);
})

socket.on("ice", ice => {
  console.log("received candidate");
  myPeerConnection.addIceCandidate(ice);
})

// RTC Code
function makeConnection() {
  myPeerConnection = new RTCPeerConnection({iceServers: [
    {
      urls: [
          "stun:stun.l.google.com:19302",
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
          "stun:stun3.l.google.com:19302",
      ]
    }
  ]});
  myPeerConnection.addEventListener("icecandidate", handleIce);
  myPeerConnection.addEventListener("addstream", handleAddStream);
  myPeerConnection.addEventListener("iceconnectionstatechange", handleConnectionChange);

  myStream
      .getTracks()
      .forEach((track) => myPeerConnection.addTrack(track, myStream));
}

// 채팅방에 누가 나갔을 때 처리
function handleConnectionChange() {
  if (myPeerConnection.iceConnectionState === "disconnected" ||
      myPeerConnection.iceConnectionState === "failed" ||
      myPeerConnection.iceConnectionState === "closed") {
    console.log("Peer has left the room");
    // 상대방 스트림 제거 또는 관련 UI 업데이트
    removePeerStream();
  }
}

function removePeerStream() {
  const peerFace = document.getElementById("peerFace");
  if (peerFace.srcObject) {
    peerFace.srcObject.getTracks().forEach(track => track.stop());
    peerFace.srcObject = null;
  }
  // 나갔을 때 UI
  const chats = document.querySelector(".chats"); // 클래스 이름으로 가정
  const li = document.createElement("li");
  li.innerText = '누군가 나갔습니다~ ㅠ, ㅠ';
  chats.appendChild(li);
}

function handleIce(data) {
  console.log("sent candidate");
  socket.emit("ice", data.candidate, roomName);
}

function handleAddStream(data) {
  console.log("got a stream from peer");
  console.log("peer`s Stream", data.stream);
  console.log("My Stream", myStream);
  const peerFace = document.getElementById("peerFace");
  peerFace.srcObject = data.stream;
}

muteBtn.addEventListener("click", handleMuteClick);
cameraBtn.addEventListener("click", handleCameraClick);
cameraSelect.addEventListener("input", handleCameraChange);
welcomeForm.addEventListener("submit", handleWelcomeSubmit);
chatForm.addEventListener("submit", handleChatSubmit);
