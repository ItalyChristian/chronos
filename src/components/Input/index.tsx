import styles from "./styles.module.css";

type InputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export const Input = ({ id, labelText, type, ...rest }: InputProps) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} className={styles.input} type={type} {...rest} />
    </>
  );
};
