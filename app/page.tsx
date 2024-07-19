"use client";

import styles from "./page.module.scss";
import { Controller } from "react-scrollmagic";
import { IntroSection } from "../components/sections/intro";
import { AboutMeSection } from "../components/sections/aboutMe";
import { SkillsSection } from "../components/sections/skills";
import { EducationSection } from "../components/sections/education";
import { FooterSection } from "../components/sections/footer";
import { ProjectsSection } from "../components/sections/projects";

export default function Home() {
  return (
    <div className={styles["section-wipes"]}>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <IntroSection />
        <AboutMeSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <FooterSection />
      </Controller>
    </div>
  );
}
