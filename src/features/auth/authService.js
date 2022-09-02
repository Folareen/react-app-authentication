import axios from "axios";

const REGISTER_URL = "https://reqres.in/api/register";

const register = async (userData) => {
  axios.post(REGISTER_URL, userData).then((response) => {
    localStorage.setItem("user", JSON.stringify(response.data));
  });
};

const authService = {
  register,
};

export default authService;
