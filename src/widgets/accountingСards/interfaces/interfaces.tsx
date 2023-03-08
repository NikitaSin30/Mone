
export interface ICardItem {
  title: string;
  money: number;
  iconCard: JSX.Element;
  switchShowModal?: () => void;
}
