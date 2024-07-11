import { FC } from "react";
import { Scene } from "react-scrollmagic";
import styles from "./shared.module.scss";

interface TitleSectionProps {
  title: string;
  theme?: "light" | "dark";
}

export const TitleSection: FC<TitleSectionProps> = ({
  title,
  theme = "light",
}) => {
  return (
    <h1 className={`${styles["title"]} ${styles[`title-${theme}`]}`}>
      <Scene classToggle={styles["title-move-up"]} offset={"-500"}>
        <span>
          {Array.from(title).map((char, index) => (
            <span
              key={index}
              className={styles["fade-in-char"]}
              style={{ transitionDelay: `${index * 0.03}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </Scene>
    </h1>
  );
};
