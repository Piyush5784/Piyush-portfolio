import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type contextProp = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

const ShowMenuContext = createContext({} as contextProp);

export function useContexts() {
  return useContext(ShowMenuContext);
}

export function ShowMenuContextProvider({ children }: { children: ReactNode }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <ShowMenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </ShowMenuContext.Provider>
  );
}
