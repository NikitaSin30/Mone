export interface IModal {
  isActive: boolean;
  onChangeActive: () => void;
  children: React.ReactNode;
}

export interface IError {
  onChangeActive: () => void;
  onChangeErr?: () => void;
  children: React.ReactNode;
}
