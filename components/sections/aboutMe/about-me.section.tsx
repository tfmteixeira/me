import { FC } from "react";
import styles from "./about-me.module.scss";
import sharedStyles from "../../shared/components/shared.module.scss";
import { TitleSection } from "../../shared/components/title-section.component";

interface SocialIconProps {
  src: string;
  href: string;
  target?: string;
}

const SocialIcon: FC<SocialIconProps> = ({ src, href, target }) => (
  <a
    href={href}
    target={target}
    className={styles["social-icon"]}
    style={{ backgroundImage: `url(${src})` }}
  />
);

export const AboutMeSection: FC = () => {
  return (
    <section
      className={`${sharedStyles["section-container"]} ${sharedStyles["section-container-dark"]}`}
    >
      <TitleSection title="About Me" theme="dark" />
      <div className={styles["information-wrapper"]}>
        <div className={styles["information-container"]}>
          <span className={styles["information"]}>
            Hi! 👋
            <br />
            <br />
            I&apos;m Tiago Teixeira, I&apos;m a Web Frontend Developer located
            in Aveiro, Portugal. I have a passion for creating beautiful and
            functional web applications.
            <br />
            <br />
            Well organized person, detail-oriented and a team player, I am
            always looking for challenging opportunities to learn and grow.
            <br />
            <br />
            Aside from work, I love sports, traveling and spending time with my
            son and girlfriend.
          </span>
          <span className={styles["connect-with-me"]}>Connect with me</span>
          <div className={styles["social-icons-container"]}>
            <SocialIcon
              src={"/assets/linkedin.png"}
              href={"https://www.linkedin.com/in/tfmteixeira"}
              target="_blank"
            />
            <SocialIcon
              src={"/assets/whatsapp.svg"}
              href={"https://wa.me/351913390352"}
              target="_blank"
            />
            <SocialIcon
              src={"/assets/mail.png"}
              href={"mailto:tiagomaioteixeira@gmail.com"}
            />
            <SocialIcon
              src={"/assets/github.png"}
              href={"https://github.com/tfmteixeira"}
            />
          </div>
        </div>

        <div className={styles["img-wrapper"]}>
          <img src={"/assets/profile-photo.jpeg"} className={styles["img"]} />
        </div>
      </div>
    </section>
  );
};
