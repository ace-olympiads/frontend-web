import React from "react";
import { useState } from "react";
import dataContext from "./datacontext";
import { AuthProvider } from "./AuthContext";

const ContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  const [refetch, setRefetch] = useState<boolean>();
  const [sidebarOption, setSideBarOption] = useState<string>("questions");
  return (
    <AuthProvider>
      <dataContext.Provider
        value={{ refetch, setRefetch, sidebarOption, setSideBarOption }}
      >
        {props.children}
      </dataContext.Provider>
    </AuthProvider>
  );
};

export default ContextProvider;
