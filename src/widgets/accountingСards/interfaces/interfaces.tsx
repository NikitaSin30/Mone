export interface ICardItem {
  title: string;
  moneyCard: number;
  onChangeActive?: () => void;
  children: React.ReactNode;
}
