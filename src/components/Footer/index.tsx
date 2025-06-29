import { RouterLink } from "../RouterLink";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro/">
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </RouterLink>
      <small>
        Este projeto foi idealizado pelo professor <b>Luiz Otávio Miranda</b> e
        apenas <b>reproduzido</b> por mim
      </small>
    </footer>
  );
}
