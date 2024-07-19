import { FC, useRef } from "react";
import { Scene } from "react-scrollmagic";
import Sequence from "./components/sequence.component";
import { TitleSection } from "@/components/shared/title-section.component";
import styles from "./education.module.scss";
import sharedStyles from "../../shared/shared.module.scss";

export const EducationSection: FC = () => {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <section
      className={`${sharedStyles["section-container"]} ${sharedStyles["section-container-dark"]}`}
    >
      <Scene pin duration="200%" triggerHook="onLeave">
        {(progress: any) => (
          <div className={styles["scroll-wrapper"]}>
            <div className={styles["background-container"]}>
              <Sequence ref={ref} progress={progress} />
              <div className={styles["filter-layer"]} />
            </div>
            <div className={styles["content-container"]}>
              <TitleSection title="Education" theme="dark" />
              <div
                className={styles["roll-down-container"]}
                style={{
                  maskSize: `100% ${progress * 200}%`,
                  WebkitMaskSize: `100% ${progress * 200}%`,
                }}
              >
                <div className={styles["list-container"]}>
                  <p className={styles["text"]}>
                    Bachelor’s degree in Computer Engineering
                  </p>
                  <p className={styles["middle-note"]}>and</p>
                  <div className={styles["text-with-footnote-container"]}>
                    <p className={styles["text"]}>
                      Master's degree in Computer Engineering
                    </p>
                    <p className={styles["footnote"]}>
                      (with Curricular Internship at Siemens)
                    </p>
                  </div>
                </div>
                <div className={styles["text-with-footnote-container"]}>
                  <p
                    className={styles["middle-note"]}
                    style={{ marginBottom: "8px" }}
                  >
                    At:
                  </p>
                  <div className={styles["icon-text-container"]}>
                    <img
                      width={"32px"}
                      src={"/assets/ua.png"}
                      alt="University de Aveiro"
                    />
                    <p className={styles["text"]}>Universidade de Aveiro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Scene>
    </section>
  );
};
