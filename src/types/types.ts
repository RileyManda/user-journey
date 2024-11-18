export interface UserData {
  name: string;
  surname: string;
  farmer: {
    farm: {
      name: string;
    };
  };
}

export interface ContextProviderValue {
  fetchData: () => Promise<void>;
  data: UserData | null;
  error: string | null;
  loading: boolean;
}

export type LandingPageTitleProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
};
