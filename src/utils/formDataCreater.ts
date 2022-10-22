import { IFormDataSend } from "./../models/models";

export function formDataCreater({ data, action, id, image }: IFormDataSend) {
  const formData = new FormData();
  Object.keys(data).map((d) => formData.set(`contact[${d}]`, d));
  formData.set("action", action);
  formData.set("id", String(id));
  formData.set("image", image);

  return formData;
}
