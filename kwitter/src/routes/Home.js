import { dbService, storageService } from "fbase";
import { useState, useEffect } from 'react';
import Kweet from "components/Kweet";
import { v4 as uuidv4 } from 'uuid';

const Home = ({ userObj }) => {
    const [kweet, setKweet] = useState('');
    const [kweets, setKweets] = useState([]);
    const [attachment, setAttachment] = useState("");

    const getKeets = async () => {
        dbService.collection("kweets").onSnapshot((snapshot) => {
            const kweetArray = snapshot.docs.map((document) => ({
                ...document.data(),  // 실제 문서를 객체로 반환
                id: document.id,
            }));
            setKweets(kweetArray)
        })
    }

    useEffect( () => {
        const fetchData = async () => {
            await getKeets();
        };
        fetchData();
    }, [])

    useEffect(() => {
        console.log('kweets updated >> ', kweets);
    }, [kweets]);

    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
            const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);

            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
            await dbService.collection("kweets").add({
                text: kweet,
                createAt: Date.now(),
                createId: userObj.uid,
                attachmentUrl,
            });
            setKweet("");
            setAttachment("");
        }
    }

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setKweet(value)
    }

    const onFileChange = (event) => {
        const { target: { files } } = event;
        if (files.length === 0) {
            console.log("No file selected.");
            return;
        }
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishEvent) => {
            const { currentTarget: { result } } = finishEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };


    const onClearAttachment = () => setAttachment("");

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    value={kweet}
                    onChange={onChange}
                    type="text"
                    placeholder="what is your mind?"
                    maxLength={120}
                />
                <input type="file" accept="image/*" onChange={onFileChange} />
                <input type="submit" value="Kweet" />
                { attachment && (
                    <div>
                        <img src={attachment} width="50px" height="50px" alt="img"/>
                        <button onClick={onClearAttachment}>Clear</button>
                    </div>

                    )}
            </form>
            <div>
            {kweets.map((data) => (
                    <Kweet
                        key={data.id}
                        kweetObj={data}
                        isOwner={data.createId === userObj.uid}
                    />
                ))}
            </div>
        </>
    )
}

export default Home;