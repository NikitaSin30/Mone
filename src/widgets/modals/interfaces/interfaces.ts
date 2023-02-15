
export interface IModal {
  isActive: boolean;
  onChangeActive: () => void;
  children: React.ReactNode;
}
