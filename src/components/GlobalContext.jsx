import { createContext, useState } from "react";
const MainContext = createContext();

const MainProvider = (props) => {
  const [openMap, setOpenMap] = useState(true);
  const [maxHeight, setMaxHeight] = useState("");

  return (
    <MainContext.Provider
      value={{ openMap, setOpenMap, maxHeight, setMaxHeight }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
