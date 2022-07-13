import axios from "axios";

export const insertUser = async (userEmail, userName, userPassword) => {
  console.log(userEmail);
  console.log(userName);
  console.log(userPassword);
  const urlStr = process.env.REACT_APP_URL_USER;
  const inputUser = {
    userEmail: userEmail,
    userName: userName,
    userPassword: userPassword,
  };
  await axios
    .post(urlStr, inputUser, process.env.REACT_APP_HEADER)
    .catch((error) => console.log(error));

  window.location.href = "/";
};

export const selectUserList = async (setUserList) => {
  const urlStr = process.env.REACT_APP_URL_USER + "/users";
  await axios
    .get(urlStr)
    .then((response) => {
      response.data;
    })
    .then((data) => {
      setUserList(data);
    })
    .catch((error) => console.log(error));
};

export const getUserByUserEmail = async (setUser, userEmail) => {
  console.log(userEmail);
  const urlStr = process.env.REACT_APP_URL_USER + "/" + userEmail;
  await axios
    .get(urlStr)
    .then((response) => {
      response.data;
    })
    .then((data) => {
      setUser(data);
    })
    .catch((error) => console.log(error));
};

export const updateUser = async (userEmail, userName, userPassword) => {
  console.log(userEmail);
  console.log(userName);
  console.log(userPassword);
  const urlStr = process.env.REACT_APP_URL_USER;
  const inputUser = {
    userEmail: userEmail,
    userName: userName,
    userPassword: userPassword,
  };
  await axios
    .put(urlStr, inputUser, process.env.REACT_APP_HEADER)
    .catch((error) => console.log(error));

  window.location.href = "/";
};

export const deleteUser = async (userEmail) => {
  console.log(userEmail);
  const urlStr = process.env.REACT_APP_URL_USER + "/" + userEmail;
  await axios.delete(urlStr).catch((error) => console.log(error));

  window.location.href = "/";
};
