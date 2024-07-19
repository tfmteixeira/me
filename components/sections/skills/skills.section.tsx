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
import sharedStyles from "../../shared/components/shared.module.scss";
import { TitleSection } from "@/components/shared/components/title-section.component";

const SKILLS = [
  {
    name: "React",
    logo: <FaReact color="black" />,
  },
  {
    name: "Angular",
    logo: <FaAngular color="black" />,
  },
  {
    name: "VueJS",
    logo: <FaVuejs color="black" />,
  },
  {
    name: "Typescript",
    logo: <SiTypescript color="black" />,
  },
  {
    name: "Javascript",
    logo: <SiJavascript color="black" />,
  },

  {
    name: "HTML",
    logo: <FaHtml5 color="black" />,
  },

  {
    name: "CSS",
    logo: <SiCsswizardry color="black" />,
  },
  {
    name: "SASS",
    logo: <SiSass color="black" />,
  },
  {
    name: "Styled Comp",
    logo: <SiStyledcomponents color="black" />,
  },
  {
    name: "Jest",
    logo: <SiJest color="black" />,
  },
  {
    name: "ESLint",
    logo: <SiEslint color="black" />,
  },
  {
    name: "Prettier",
    logo: <SiPrettier color="black" />,
  },
  {
    name: "Node",
    logo: <FaNode color="black" />,
  },
  {
    name: "NextJS",
    logo: <RiNextjsFill color="black" />,
  },
  {
    name: "Webpack",
    logo: <SiWebpack color="black" />,
  },
  {
    name: "NPM",
    logo: <FaNpm color="black" />,
  },

  {
    name: "AWS",
    logo: <FaAws color="black" />,
  },
  {
    name: "GIT",
    logo: <FaGitSquare color="black" />,
  },
];

export const SkillsSection: FC = () => {
  return (
    <section
      id="triggerSkills"
      className={`${sharedStyles["section-container"]} ${sharedStyles["section-container-light"]}`}
      style={{ minHeight: 0 }}
    >
      <TitleSection title="Skills" theme="light" />
      <HiveNest items={SKILLS} />
      <p className={styles["keep-learning"]}>And keep learning... 📚</p>
    </section>
  );
};
