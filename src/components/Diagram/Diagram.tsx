import { FC } from "react";
import cls from "./styles.module.css";

interface DiagramProps {
  data: never[];
}

export const Diagram: FC<DiagramProps> = () => {
  return (
    <div className={cls.diagram}>
      <div>sass</div>
    </div>
  );
};
