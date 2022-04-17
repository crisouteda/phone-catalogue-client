export interface IPhone {
  id?: string;
  name: string;
  thumbnailFileName: string;
  price: string;
  color?: string;
  description?: string;
  imageFileName?: string;
  manufacturer?: string;
  memory?: string;
  processor?: string;
  ram?: string;
  screen?: string;
  [val: string]: string | undefined;
}

export interface IForm {
  required: boolean;
  type?: string;
  pattern?: string;
}
