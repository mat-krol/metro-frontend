import axios from '../axiosInstance';

const apiGetLevels = () => {
  return axios(configFor())
}

const configFor = (params = {}) => {
  return {
    method: "get",
    // headers: {
    //   Authorization: localStorage.getItem("token")
    // },
    url: "levels",
    params: params
  }
}

export default apiGetLevels