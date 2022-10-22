export interface IUserForm {
  name: string;
  surname: string;
  patronymic: string;
}

export interface IFormDataSend {
  action: string;
  id: number;
  image: File;
  data: IUserForm;
}

export interface IPalette {
  id: string;
  color: string;
}
