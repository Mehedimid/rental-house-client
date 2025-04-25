import axios from "axios";

const axiosPublic = axios.create({
     baseURL:'http://localhost:5000/api',
//   baseURL: "https://shofor-pothe-server.vercel.app/",
});
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic;
