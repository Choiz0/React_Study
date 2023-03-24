import React, { createContext, useState, useEffect, ReactNode } from "react";

interface UiChangeContextValue {
  searchbarChange: boolean;
  sidebarChange: boolean;
  showSearchInput: boolean;
  setShowSearchInput: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebarChange: React.Dispatch<React.SetStateAction<boolean>>;
  ableButton:boolean;
  setableButton:React.Dispatch<React.SetStateAction<boolean>>

}

export const UiChangeContext = createContext<UiChangeContextValue>({
  searchbarChange: false,
  sidebarChange: true,
  showSearchInput: false,
  setShowSearchInput: () => {},
  setSidebarChange: () => {},
  ableButton:true,
  setableButton: () => {},
});

interface UiChangeContextProviderProps {
  children: ReactNode;
}

export const UiChangeContextProvider = ({
  children,
}: UiChangeContextProviderProps) => {
  const [searchbarChange, setSearchbarChange] = useState(false);
  const [sidebarChange, setSidebarChange] = useState(true);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [ableButton,setableButton] = useState(true);
  useEffect(() => {
    function handleResize() {
      const windowSize = window.innerWidth;
      if (windowSize && windowSize < 1312) {
        setSidebarChange(false);
        setSearchbarChange(false);
      }
      if (windowSize && windowSize < 650) {
        setSearchbarChange(true);
        setSidebarChange(false);
      }
      if (windowSize && windowSize > 1312) {
        setSearchbarChange(false);
        setSidebarChange(true);
      }
      if (windowSize > 650) {
        setShowSearchInput(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const uiContextValue: UiChangeContextValue = {
    searchbarChange,
    sidebarChange,
    showSearchInput,
    setShowSearchInput,
    setSidebarChange,
    ableButton,
    setableButton,
  };

  return (
    <UiChangeContext.Provider value={uiContextValue}>
      {children}
    </UiChangeContext.Provider>
  );
};
