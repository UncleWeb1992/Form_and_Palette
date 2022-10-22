import axios from "axios";

const http = axios.create({ baseURL: "https://test-job.pixli.app/send.php" });

export const httpService = {
  get: http.get,
  post: http.post,
  delete: http.delete,
  put: http.put,
  patch: http.patch,
};
