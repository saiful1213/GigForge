import axios from "axios";

const instance = axios.create({
   baseURL: 'http://localhost:5000/api/v1',
   // withCredentials: true
});

const UseApi = () => {
   return instance
};

export default UseApi;