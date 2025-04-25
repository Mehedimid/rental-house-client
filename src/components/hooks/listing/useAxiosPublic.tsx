import axios from "axios";

const axiosPublic = axios.create({
    //  baseURL:'http://localhost:5000/api',
  baseURL: "https://basa-finder-server-ten.vercel.app/api",
});
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic;
