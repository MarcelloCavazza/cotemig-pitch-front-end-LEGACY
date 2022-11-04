import axios from "axios";
import { baseAPIUrl, version, apiEmail } from "../../../../constants/Constants";

export function EmailAPI() {
  return axios.create({
    baseURL: baseAPIUrl + version + apiEmail,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
