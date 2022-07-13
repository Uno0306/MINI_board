import axios from "axios";
const URL = "/api/user";

export const insertUser = async (userEmail, userName, userPassword) => {
  console.log(userEmail);
  console.log(userName);
  console.log(userPassword);
  const urlStr = URL;
  const inputUser = {
    userEmail: userEmail,
    userName: userName,
    userPassword: userPassword,
  };
  const headers = {
    "Content-Type": "application/json",
  };
  await axios
    .post(urlStr, inputUser, { headers })
    .catch((error) => console.log(error));

  window.location.href = "/";
};

export const selectUserList = async (setUserList) => {
  const urlStr = URL + "/users";
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
  const urlStr = URL + "/" + userEmail;
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
  const urlStr = URL;
  const inputUser = {
    userEmail: userEmail,
    userName: userName,
    userPassword: userPassword,
  };
  const headers = {
    "Content-Type": "application/json",
  };
  await axios
    .put(urlStr, inputUser, { headers })
    .catch((error) => console.log(error));

  window.location.href = "/";
};

export const deleteUser = async (userEmail) => {
  console.log(userEmail);
  const urlStr = URL + "/" + userEmail;
  await axios.delete(urlStr).catch((error) => console.log(error));

  window.location.href = "/";
};
