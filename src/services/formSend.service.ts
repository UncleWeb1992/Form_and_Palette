import { AxiosResponse } from "axios";
import { httpService } from "./http.service";

export const formSendService = {
  formSend: async (payload: FormData) => {
    const { data } = await httpService.post<AxiosResponse>("", payload);
    return data.status;
  },
};
