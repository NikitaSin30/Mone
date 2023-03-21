
export interface IFormCategorie {
  income: number;
  sphere: string;
}

export interface IServiceIncome {
  midilwareAddIncome: (income: number, sphere: string) => void;
}
