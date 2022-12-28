import { useEffect, useState } from "react";

const [viewPort, setViewPort] = useState(
  window.matchMedia("(min-width: 528px)").matches
);
useEffect(() => {
  const handler = (e) => setViewPort(e.matches);
  window.matchMedia("(min-width: 528px)").addEventListener("change", handler);
}, []);

export default viewPort;
