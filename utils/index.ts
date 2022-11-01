import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "http://localhost:3000/api";
const BASE_URL = "https://tiktok-clone-sage.vercel.app";

export const createOrGetUser = async (response: any) => {
  const decoded: { name: string; picture: string; sub: string } = jwtDecode(
    response.credential
  );

  const { name, picture, sub } = decoded;

  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  axios.post(`${BASE_URL || API_URL}/api/auth`, user);
};
