import React from "react";
import styles from "./buy-me-a-coffee.module.scss";

const BuyMeACoffeeButton = () => {
  return (
    <a
      className={styles["coffee-button"]}
      target="_blank"
      href="https://www.buymeacoffee.com/tfmteixeira"
    >
      <img
        className={styles["coffee-image"]}
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
    </a>
  );
};

export default BuyMeACoffeeButton;
