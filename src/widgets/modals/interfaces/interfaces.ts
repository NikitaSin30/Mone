export interface IModal {
  isActive: boolean;
  onSwitchModal:() => void;
  children: React.ReactNode;
}

export interface IError {
  onSwitchModal: () => void
  children: React.ReactNode;
}
