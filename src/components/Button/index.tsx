import styles from "./styles.module.css";

type ButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export const Button = ({ icon, color = "green", ...props }: ButtonProps) => {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
      {/* <small>
        ao final do ciclo a aplicação vai disparar um som, não se assuste
      </small> */}
    </>
  );
};
