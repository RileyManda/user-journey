/**
 * ContextProvider component that provides context to its children.
 * 
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components that will consume the context.
 * 
 * @returns {JSX.Element} The provider component that wraps its children with the context.
 * 
 * @usage
 * ```tsx
 * <ContextProvider>
 *   <Component />
 * </ContextProvider>
 * ```
 */
 
/**
 * Custom hook to use the context provided by ContextProvider.
 * 
 * @throws {Error} If the hook is used outside of a ContextProvider.
 * 
 * @returns {ContextProviderInterface} The context value which includes fetchData, data, error, and loading.
 * 
 * @usage
 * ```tsx
 * const { fetchData, data, error, loading } = useContextProvider();
 * ```
 */
import { createContext, useContext, ReactNode, useState } from "react";
import fetchUserData from "../api/fetchUserData";
import { ContextProviderInterface, UserDataInterface } from "../types/types";

const Context = createContext<ContextProviderInterface | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<UserDataInterface | null>(null);
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
