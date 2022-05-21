export interface Inputs {
  id: number;
  label: string;
  type: string;
  placeholder?: string;
}

export const userInputs: Inputs[] = [
    {
      id: 1,
      label: "نام کاربری",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: 2,
      label: "نام و نام خانوادگی",
      type: "text",
      placeholder: "جادی میرمیرانی",
    },
    {
      id: 3,
      label: "ایمیل",
      type: "mail",
      placeholder: "john_doe@gmail.com",
    },
    {
      id: 4,
      label: "موبایل",
      type: "text",
      placeholder: "09301010757",
    },
    {
      id: 5,
      label: "رمز",
      type: "password",
    }
  ];
  
  export const productInputs: Inputs[] = [
    {
      id: 1,
      label: "عنوان",
      type: "text",
      placeholder: "دوره گرامر آیلتس",
    },
    {
      id: 2,
      label: "توضیحات",
      type: "text",
      placeholder: "توضیحات",
    },
    {
      id: 3,
      label: "دسته بندی",
      type: "text",
      placeholder: "آیلتس",
    },
    {
      id: 4,
      label: "قیمت",
      type: "text",
      placeholder: "100",
    },
  ];