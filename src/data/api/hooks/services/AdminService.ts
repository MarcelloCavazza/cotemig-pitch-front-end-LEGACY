import axios from "axios";
import { baseAPIUrl, version, apiAdmin } from "../../../../constants/Constants";

export function AdminAPI(barerToken = null) {
  if (barerToken) {
    return axios.create({
      baseURL: baseAPIUrl + version + apiAdmin,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${barerToken}`,
      },
    });
  }
  return axios.create({
    baseURL: baseAPIUrl + version + apiAdmin,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
