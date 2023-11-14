import axios from "axios";

const instance = axios.create({
   baseURL: 'https://gig-forge-server.vercel.app/api/v1',
});

const UseApi = () => {
   return instance
};

export default UseApi;