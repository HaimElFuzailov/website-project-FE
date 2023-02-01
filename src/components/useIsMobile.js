import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 960) setIsMobile(false);
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setIsMobile(false);
      else setIsMobile(true);
    });
  }, []);

  return isMobile;
}
