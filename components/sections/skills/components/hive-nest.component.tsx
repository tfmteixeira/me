import React, { ReactNode } from "react";
import HiveItem from "./hive-item.component";
import styles from "./hive-nest.module.scss";

interface HiveNestProps {
  items: { name: string; logo: ReactNode }[];
}

const HiveNest = ({ items }: HiveNestProps) => (
  <div className={styles["hive-nest-wrapper"]}>
    <div className={styles["hive-items-container"]}>
      {items.map((item, index) => (
        <HiveItem
          key={`hive-item-${index}`}
          name={item.name}
          logo={item.logo}
        />
      ))}
    </div>
  </div>
);

export default HiveNest;
