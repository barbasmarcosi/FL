import { createContext, useEffect, useState } from "react";
const MainContext = createContext();

const MainProvider = (props) => {
  const [openMap, setOpenMap] = useState(false);
  const [maxHeight, setMaxHeight] = useState("");
  const [viewPort, setViewPort] = useState(
    window.matchMedia("(min-width: 528px)").matches
  );
  useEffect(() => {
    const handler = (e) => setViewPort(e.matches);
    window.matchMedia("(min-width: 528px)").addEventListener("change", handler);
  }, []);
  return (
    <MainContext.Provider
      value={{ openMap, setOpenMap, maxHeight, setMaxHeight, viewPort }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
