"use client";

import styles from "./page.module.scss";
import { Controller } from "react-scrollmagic";
import { IntroSection } from "../components/sections/intro";
import { AboutMeSection } from "../components/sections/aboutMe";
import { SkillsSection } from "../components/sections/skills";

export default function Home() {
  return (
    <div className={styles["section-wipes"]}>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <IntroSection />
        <AboutMeSection />
        <SkillsSection />
      </Controller>
    </div>
  );
}
