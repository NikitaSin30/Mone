
export interface ICardItem {
  title: string;
  money: number;
  iconCard: JSX.Element;
  onChangeActive?: () => void;
}
