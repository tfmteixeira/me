import React, { FC } from "react";
import HiveNest from "./components/hive-nest.component";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNode,
  FaHtml5,
  FaNpm,
  FaAws,
  FaGitSquare,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiSass,
  SiCsswizardry,
  SiStyledcomponents,
  SiJest,
  SiEslint,
  SiPrettier,
  SiWebpack,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import styles from "./skills.module.scss";
import sharedStyles from "../../shared/shared.module.scss";
import { TitleSection } from "@/components/shared/title-section.component";

const SKILLS = [
  {
    name: "React",
    logo: <FaReact />,
  },
  {
    name: "Angular",
    logo: <FaAngular />,
  },
  {
    name: "VueJS",
    logo: <FaVuejs />,
  },
  {
    name: "Typescript",
    logo: <SiTypescript />,
  },
  {
    name: "Javascript",
    logo: <SiJavascript />,
  },

  {
    name: "HTML",
    logo: <FaHtml5 />,
  },

  {
    name: "CSS",
    logo: <SiCsswizardry />,
  },
  {
    name: "SASS",
    logo: <SiSass />,
  },
  {
    name: "Styled Comp",
    logo: <SiStyledcomponents />,
  },
  {
    name: "Jest",
    logo: <SiJest />,
  },
  {
    name: "ESLint",
    logo: <SiEslint />,
  },
  {
    name: "Prettier",
    logo: <SiPrettier />,
  },
  {
    name: "Node",
    logo: <FaNode />,
  },
  {
    name: "NextJS",
    logo: <RiNextjsFill />,
  },
  {
    name: "Webpack",
    logo: <SiWebpack />,
  },
  {
    name: "NPM",
    logo: <FaNpm />,
  },

  {
    name: "AWS",
    logo: <FaAws />,
  },
  {
    name: "GIT",
    logo: <FaGitSquare />,
  },
];

export const SkillsSection: FC = () => {
  return (
    <div
      id="triggerSkills"
      className={`${sharedStyles["section-container"]} ${sharedStyles["section-container-light"]}`}
      style={{ minHeight: 0 }}
    >
      <TitleSection title="Skills" theme="light" />
      <HiveNest items={SKILLS} />
      <p className={styles["keep-learning"]}>And keep learning... 📚</p>
    </div>
  );
};
