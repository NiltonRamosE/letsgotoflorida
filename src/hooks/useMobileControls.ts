import { useState, useEffect } from "react";

const useMobileControls = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Define el límite para móvil
    };

    checkIfMobile(); // Revisa el tamaño de la ventana al cargar

    window.addEventListener("resize", checkIfMobile); // Escucha el cambio de tamaño

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return isMobile;
};

export default useMobileControls;
