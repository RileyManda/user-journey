import { createContext, useContext, ReactNode } from "react";

interface ContextProviderValue {
  fetchGraphQL: (query: string, variables?: {}) => Promise<any>;
}

const Context = createContext<ContextProviderValue | null>(null);

// Base fetch function for GraphQL
const fetchGraphQL = async (query: string, variables = {}) => {
  const response = await fetch(import.meta.env.VITE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data;
};

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Context.Provider value={{ fetchGraphQL }}>{children}</Context.Provider>
  );
};

export const useContextProvider = () => useContext(Context);
