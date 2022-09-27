import axios from "axios";
import { baseAPIUrl, version, apiAuth } from "../../../../constants/Constants";

export function AuthAPI(barerToken = null) {
  if (barerToken) {
    return axios.create({
      baseURL: baseAPIUrl + version + apiAuth,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${barerToken}`,
      },
    });
  }
  return axios.create({
    baseURL: baseAPIUrl + version + apiAuth,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
