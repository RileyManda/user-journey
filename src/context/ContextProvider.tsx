import { createContext, useContext, ReactNode, useState } from "react";
import fetchUserData from "../api/fetchUserData";
import { ContextProviderValue, UserData } from "../types/types";

const Context = createContext<ContextProviderValue | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const userData = await fetchUserData();
      setData(userData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Context.Provider value={{ fetchData, data, error, loading }}>
      {children}
    </Context.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContextProvider must be used within a ContextProvider");
  }
  return context;
};
