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
    description:
      "As part of my master's degree, I developed a POC for a project aimed at analyzing mobile network data.",
    stack: "Javascript, CSS, Leaflet, Java, Python, GeoServer",
    startDate: "2017-09",
    endDate: "2018-07",
    companyName: "Siemens",
    companyLogo: "/assets/siemens.png",
  },
  {
    title: "Vodafone TV",
    description:
      "Developed web apps for TV box. Integrated in a cross-functional team",
    stack: "Vue.js, TypeScript, Javascript, Sass, Docker, GIT",
    startDate: "2018-08",
    endDate: "2019-09",
    companyName: "Wit Software",
    companyLogo: "/assets/wit.png",
  },
  {
    title: "Internal Management System",
    description:
      "System to manage the company's financial and resources processes. Integrated in a cross-functional team.",
    stack: "Angular, Typescript, Sass, Java, Springboot, MongoDB, GIT",
    startDate: "2019-09",
    endDate: "2020-10",
    companyName: "Wit Software",
    companyLogo: "/assets/wit.png",
  },
  {
    title: "M-Pesa",
    description:
      "Develop the backoffice interface for a versatile financial platform targeting African markets. Cross-functional team using an Agile SAFE methodology.",
    stack: "React, Typescript, Styled Components, Storybook, Jenkins, GIT",
    startDate: "2020-10",
    endDate: "2022-04",
    companyName: "Wit Software",
    companyLogo: "/assets/wit.png",
  },
  {
    title: "Carlshop+",
    description:
      "Develop a B2B e-commerce platform for local beer sellers, collaborating as one of three frontend developers in an Agile SCRUM team.",
    stack: "React, Typescript, Sass, Jest, NextJS, AWS, GIT",
    startDate: "2022-04",
    companyName: "Carlsberg Group",
    companyLogo: "/assets/carlsberg.png",
  },
];

export const ProjectsSection: FC = () => {
  const [isClient, setIsClient] = useState(false);
  const isTabletOrMobile = useIsMinWidth(1024);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAnimationProgress = (progress: number) => {
    if (lottieRef.current) {
      const frame =
        // @ts-ignore
        progress * lottieRef.current.animationItem?.totalFrames;
      lottieRef.current.goToAndStop(frame, true);
    }
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
                    color: "black",
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
