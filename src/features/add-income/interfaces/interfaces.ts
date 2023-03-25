
export interface IFormCategorie {
  income: number;
  sphere: string;
}

export interface IServiceIncome {
  addIncome: (income: number, sphere: string) => void;
}
