import { ChangeEvent, FC, FormEvent, useState } from "react";
import TextField from "../common/form/TextField";
import vector from "../../assets/Vector.png";
import FileField from "../common/form/FileField";
import TextAreaField from "../common/form/TextAreaField";
import { formDataCreater } from "../../utils/formDataCreater";
import { formSendService } from "../../services/formSend.service";
import { IUserForm } from "../../models/models";
import Button from "../common/Button";

const initialState: IUserForm = {
  name: "",
  surname: "",
  patronymic: "",
};

const FormPage: FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [img, setImg] = useState<File>();
  const [imgUrl, setImgUrl] = useState<string>("");
  const [response, setResponse] = useState<string>();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const selectedFile = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (target.files) {
      setImg(target.files[0]);

      reader.onload = ({ target }) => {
        setImgUrl(JSON.stringify(target?.result));
      };

      reader.readAsDataURL(target.files[0]);
    } else return;
  };

  const isValid =
    Object.values(formData).every((v) => v.length) && imgUrl.length > 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid) return;

    if (img) {
      const data = formDataCreater({
        data: formData,
        action: "send_data",
        id: 1,
        image: img,
      });

      const res = await formSendService.formSend(data);
      setResponse(String(res));
    }

    setFormData(initialState);
    setImg(undefined);
    setImgUrl("");
  };

  return (
    <>
      <form className="mt-10 w-[343px]" onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={formData.name}
          label="Имя"
          onChange={handleChange}
        />
        <TextField
          name="surname"
          value={formData.surname}
          label="Фамилия"
          onChange={handleChange}
        />
        <TextField
          name="patronymic"
          value={formData.patronymic}
          label="Отчество"
          onChange={handleChange}
        />
        <FileField
          img={vector}
          label="Фото"
          onChange={selectedFile}
          url={imgUrl}
        />
        <Button disabled={!isValid}>Сохранить</Button>
        <TextAreaField status={response}></TextAreaField>
      </form>
    </>
  );
};

export default FormPage;
