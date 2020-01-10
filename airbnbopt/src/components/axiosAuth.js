import axios from "axios";

const axiosAuth = () => {
  const token = localStorage.getItem("token");
  //console.log(token);

  return axios.create({
    baseURL: 'https://airbnb-bw.herokuapp.com/api/auth',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
};

export default axiosAuth;