import React from "react";

export const useCreateContext = <TContext extends {}>(value: TContext) => {
  const Context = React.createContext<TContext>(value);

  const useContext = () => {
    const contextValue = React.useContext(Context);

    if (contextValue === undefined) {
      throw new Error("useContext должен быть внутри провайдера");
    }
    return contextValue;
  };

  return { Context, useContext };
};
