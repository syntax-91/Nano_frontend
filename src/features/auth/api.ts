//import axios from "axios";
//import { API } from "../../app/api/api";

export async function submit() {
  try {
    // const res = await axios.post(`${API.base.auth}`);

    return {
      success: true,
      msg: "sdf",
    };
  } catch (err) {
    console.error("ERROR - feat/auth/api - async func submit >> ", err);
  }
}
