import React, { FC, useRef, useEffect, useState } from "react";
import { Scene } from "react-scrollmagic";
import animation from "./lottie-animation.json";
import { getProgressiveDate, getProgressiveMonthYear } from "./projects.utils";
import { ProjectCard } from "./components/project-card.component";
import useIsMinWidth from "../../shared/hooks/useIsMinWidth.hook";
import { TitleSection } from "../../shared/components/title-section.component";
import sharedStyles from "../../shared/components/shared.module.scss";
import styles from "./projects.module.scss";
import { LottieRefCurrentProps } from "lottie-react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const PROJECTS = [
  {
    title: "Curricular Internship",
    description: "Curricular Internship of master's degree",
    stack: "Vue.js, TypeScript/Javascript, GIT, Docker",
    startDate: "2017-09",
    endDate: "2018-07",
    companyName: "Siemens",
    companyLogo: "/assets/siemens.png",
  },
  {
    title: "Vodafone TV",
    description:
      "Develop web apps for TV box. Integrated in a cross-functional team",
    stack: "Vue.js, TypeScript/Javascript, GIT, Docker",
    startDate: "2018-08",
    endDate: "2019-09",
    companyName: "Wit Software",
    companyLogo: "/assets/wit.png",
  },
  {
    title: "Internal Management System",
    description:
      "System to manage the company's financial and resources processes. Integrated in a cross-functional team.",
    stack: "Angular, Typescript, Java, Springboot, Springdata, MongoDB",
    startDate: "2019-09",
    endDate: "2020-10",
    companyName: "Wit Software",
    companyLogo: "/assets/wit.png",
  },
  {
    title: "M-Pesa",
    description:
      "Develop the backoffice interface for a versatile financial platform targeting African markets. Cross-functional team using an Agile SAFE methodology.",
    stack: "React, Typescript, GIT, Jenkins, JIRA",
    startDate: "2020-10",
    endDate: "2022-04",
    companyName: "Wit Software",
    companyLogo: "/assets/wit.png",
  },
  {
    title: "Carlshop+",
    description:
      "Develop a B2B e-commerce platform for local beer sellers, collaborating as one of three frontend developers in an Agile SCRUM team.",
    stack: "React, Typescript, Jest, GIT, JIRA",
    startDate: "2022-04",
    companyName: "Carlsberg Group",
    companyLogo: "/assets/carlsberg.png",
  },
];

export const ProjectsSection: FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const isTabletOrMobile = useIsMinWidth(1024);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      console.log("lottieRef.current :", lottieRef.current);
      const frame =
        // @ts-ignore
        animationProgress * lottieRef.current.animationItem?.totalFrames || 0;
      lottieRef.current.goToAndStop(frame, true);
    }
  }, [animationProgress]);

  const handleAnimationProgress = (progress: number) => {
    setAnimationProgress(progress);
  };

  return (
    <section
      className={`${sharedStyles["section-container"]} ${sharedStyles["section-container-light"]}`}
    >
      <Scene pin duration="100%" triggerHook="onLeave">
        {(progress: any) => {
          handleAnimationProgress(progress);
          return (
            <div className={styles["scroll-wrapper"]}>
              <TitleSection title="Projects" theme="light" />
              <div className={styles["scroll-wrapper-inner"]}>
                <p
                  style={{
                    top: `${!isTabletOrMobile ? progress * 70 - 2 : -2}vh`,
                  }}
                >
                  {getProgressiveMonthYear(progress)}
                </p>
                {isClient && (
                  <Lottie
                    loop={false}
                    autoplay={false}
                    animationData={animation}
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMax meet",
                    }}
                    style={{
                      width: "236px",
                      height: isTabletOrMobile ? "85vh" : "70vh",
                    }}
                    lottieRef={lottieRef}
                  />
                )}
                {PROJECTS.map((project, index) => (
                  <ProjectCard
                    key={`project-${index}`}
                    index={index}
                    actualDate={getProgressiveDate(progress)}
                    project={project}
                  />
                ))}
              </div>
            </div>
          );
        }}
      </Scene>
    </section>
  );
};
