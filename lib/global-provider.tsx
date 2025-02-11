import React, { createContext, useContext, ReactNode } from "react";

import { getCurrentUser } from "./appwrite";
import { useAppwrite } from "./useAppwrite";
import { Redirect } from "expo-router";

type User = {
  $id: string;
  email: string;
  name: string;
  avatar: string;
};

type GlobalContextType = {
  isLogged: boolean;
  user: User | null;
  loading: boolean;
  refetch: () => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

type GlobalProviderProps = {
  children: React.ReactNode;
};

const globalContextProvider = ({ children }: GlobalProviderProps) => {
  const {
    data: user,
    loading,
    refetch,
  } = useAppwrite({
    fn: getCurrentUser,
  });

  //   console.log(JSON.stringify(user, null, 2));

  const isLogged = !!user;
  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        user,
        loading,
        refetch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used withing a global provider");
  }
  return context;
};

export default globalContextProvider;
