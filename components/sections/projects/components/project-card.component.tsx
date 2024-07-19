import React, { useEffect, useState } from "react";
import styles from "./project-card.module.scss";
import { isInDateRange, getMonthYear, isPast } from "../projects.utils";
import useIsMinWidth from "../../../shared/hooks/useIsMinWidth.hook";

interface ProjectCardProps {
  index: number;
  actualDate: Date;
  project: {
    title: string;
    startDate: string;
    endDate?: string;
    description: string;
    stack: string;
    companyName: string;
    companyLogo: string;
  };
}

export const ProjectCard = ({
  project,
  index,
  actualDate,
}: ProjectCardProps) => {
  const [active, setActive] = useState(false);
  const [inThePast, setInThePast] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const isTabletOrMobile = useIsMinWidth(1024);

  useEffect(() => {
    setActive(isInDateRange(actualDate, project.startDate, project.endDate));
    setInThePast(isPast(project.endDate, actualDate));
  }, [actualDate, project.endDate, project.startDate, inThePast]);

  const containerClasses = [
    styles["project-card-container"],
    active && styles.active,
    inThePast && styles.past,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={containerClasses}
      style={{
        top: `${index * 12}vh`,
        transform:
          (isTabletOrMobile && active) ||
          (!isTabletOrMobile && (active || inThePast))
            ? "translateX(0)"
            : index % 2 === 0
              ? "translateX(-300%)"
              : "translateX(300%)",
      }}
      onClick={() => setIsSelected(!isSelected)}
    >
      <h3 className={styles["project-title"]}>{project.title}</h3>
      <p
        className={styles["project-date"]}
      >{`${getMonthYear(project.startDate)} - ${getMonthYear(
        project.endDate
      )}`}</p>
      <p className={styles["project-description"]}>{project.description}</p>
      <p className={styles["project-stack"]}>{project.stack}</p>
      <div className={styles["project-company"]}>
        <img
          className={styles["company-logo"]}
          src={project.companyLogo}
          alt={project.companyLogo}
        />
      </div>
    </div>
  );
};
