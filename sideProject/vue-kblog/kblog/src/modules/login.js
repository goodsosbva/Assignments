import useAxios from "./axios.js";
import md5 from "js-md5";
const { axiosPut, axiosPost } = useAxios();

export default function () {
  const checkToken = (email, token) =>
    new Promise((resolve, reject) => {
      axiosPost(
        `/db/accounts/check-token/${md(email)}/${token}`,
        {},
        (data) => {
          resolve(data);
        },
        (data) => {
          reject(data);
        }
      );
    });

  const updatePassword = (email, password, oldpassword) =>
    new Promise((resolve, reject) => {
      const enc_pw = password == "vue" ? password : md5(password);
      axiosPut(
        `/db/accounts/${md(email)}/${enc_pw}/${md5(oldpassword)}`,
        {},
        (data) => {
          resolve(data);
        },
        (data) => {
          reject(data);
        }
      );
    });

  const login = (email, password) =>
    new Promise((resolve, reject) => {
      axiosPost(
        `/db/accounts/login/${md5(email)}/${md5(password)}`,
        {},
        (data) => {
          resolve(data);
        },
        (data) => {
          reject(data);
        }
      );
    });

  return {
    checkToken,
    updatePassword,
    login,
  };
}
