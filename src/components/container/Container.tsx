import type { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string; // Buena práctica: permitir clases adicionales opcionales
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <main
      className={`flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all ${styles.containerGlow} ${className}`}
    >
      {children}
    </main>
  );
};

export default Container;
