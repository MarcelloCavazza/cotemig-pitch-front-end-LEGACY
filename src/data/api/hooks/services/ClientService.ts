import axios from "axios";
import {
  baseAPIUrl,
  version,
  apiClient,
} from "../../../../constants/Constants";

export function ClientAPI(barerToken = null) {
  if (barerToken) {
    return axios.create({
      baseURL: baseAPIUrl + version + apiClient,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${barerToken}`,
      },
    });
  }
  return axios.create({
    baseURL: baseAPIUrl + version + apiClient,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
