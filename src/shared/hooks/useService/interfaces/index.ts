export interface IUseService {
  reset: () => void;
  caseLabel: string;
  switchISModal?: () => void;
  switchIsModalErr?: () => void;
  setValueSelect?: React.Dispatch<React.SetStateAction<string>>;
}
