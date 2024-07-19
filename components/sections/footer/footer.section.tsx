import React from "react";
import styles from "./footer.module.scss";
import BuyMeACoffeeButton from "./components/buy-me-a-coffee.component";

export const FooterSection = () => {
  return (
    <section className={styles["footer-container"]}>
      <p className={styles["footer-text"]}>Made with ❤️ by Tiago Teixeira</p>
      <BuyMeACoffeeButton />
    </section>
  );
};
