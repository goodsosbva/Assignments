// 함수 setCookie 정의: 쿠키를 설정하는 함수
// key: 쿠키의 이름
// value: 쿠키의 값
// days: 쿠키의 만료 기간(기본값은 1일)
const setCookie = (key, value, days = 1) => {
  // 현재 날짜와 시간을 가져옴
  const date = new Date();
  // 쿠키의 만료 날짜를 설정, 현재 날짜에 만료 기간을 더함
  date.setHours(24 * days - date.getTimezoneOffset() / 60, 0, 0, 0);
  // 만료 날짜를 UTC 문자열로 변환
  const expires = date.toUTCString();
  // 쿠키를 설정, 쿠키 이름, 값, 만료 날짜, 경로를 포함
  document.cookie = `${key}=${value};expires=${expires};path=/`;
};

// 함수 getCookie 정의: 쿠키를 가져오는 함수
// key: 가져올 쿠키의 이름
const getCookie = (key) => {
  // document.cookie에서 쿠키 문자열을 가져와서 배열로 분할
  const value = document.cookie
    .split(";")
    // 배열에서 쿠키 이름이 일치하는 항목을 찾음
    .find((i) => i.trim().startsWith(key + "="));
  // 만약 찾았다면 해당 쿠키 값을 반환 (키와 '='를 제외하고 추출)
  if (!!value) {
    return value.trim().substring(key.length + 1);
  }
  // 일치하는 쿠키를 찾지 못한 경우 null 반환
  return null;
};

// setCookie와 getCookie 함수를 다른 모듈에서 사용할 수 있도록 내보냄
export { setCookie, getCookie };
