import React, { FC } from "react";
import { Scene } from "react-scrollmagic";
import styles from "./intro.module.scss";
import sharedStyles from "../../shared/components/shared.module.scss";

export const IntroSection: FC = () => {
  return (
    <section
      className={`${sharedStyles["section-container"]} ${sharedStyles["section-container-light"]}`}
    >
      <Scene pin>
        <section id="trigger" className={styles["intro-container"]}>
          <div className={styles["title-container"]}>
            <div className={styles["left-title"]}>
              <span style={{ fontSize: "18px" }}>Hi there!</span>
              <span>Frontend</span>
            </div>
            <Scene
              duration={"10%"}
              classToggle={styles["grow"]}
              triggerElement="#trigger"
            >
              <div className={styles["moving-space"]}></div>
            </Scene>
            <div className={styles["right-title"]}>
              <span style={{ fontSize: "18px" }}>I am Tiago, </span>
              <span>Developer</span>
            </div>
          </div>
        </section>
      </Scene>
      <img src="/assets/memoji-mac.png" className={styles["memoji"]} />
    </section>
  );
};
