import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTopBehaviour() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
