import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useResponsiveMenu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsOpen(false);
  }, [location]);

  return {
    isOpen,
    toggle: () => setIsOpen((prev) => !prev),
    close: () => setIsOpen(false),
  };
};
