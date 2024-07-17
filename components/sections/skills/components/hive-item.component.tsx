import React, { ReactNode } from "react";
import styles from "./hive-nest.module.scss";

interface HiveItemProps {
  name: string;
  logo: ReactNode;
}

const HiveItem = ({ name, logo }: HiveItemProps) => (
  <div className={styles["hive-item-wrapper"]}>
    <div className={styles["hive-item-logo-wrapper"]}>{logo}</div>
    <div className={styles["hive-item-name"]}>{name}</div>
  </div>
);

export default HiveItem;
