export interface UserDataInterface {
  name: string;
  surname: string;
  farmer: {
    farm: {
      name: string;
    };
  };
}

export interface ContextProviderInterface {
  fetchData: () => Promise<void>;
  data: UserDataInterface | null;
  error: string | null;
  loading: boolean;
}

export type PageTitleInterface = {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
};

export interface ChecklistSectionInterface {
  isSummary?: boolean;
  selectedItems: Record<string, string[]>;
  onCheckboxChange: (section: string, item: string) => void;
}

export interface ChecklistItemInterface {
  item: string;
  isLastItem: boolean;
  isSummary?: ChecklistSectionInterface;
  isChecked: boolean;
  onChange?: () => void;
}
