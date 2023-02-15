export interface IFormAuth {
  firstName?: string;
  phoneNumber?: string;
  email: string;
  country?: string;
  nickName?: string;
  password: string;
}

export interface IFormCategorie {
  income: string;
  sphere: string;
}

export interface IModalIncome {
  onChangeActive: () => void;
  incomeTitle: string;
}

export interface IOperationInfo {
  income: number;
  sphere: string;
  date: Date;
}
