import styles from "./styles.module.css";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../Templates/MainTemplate";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SaveIcon } from "lucide-react";

export const Settings = () => {
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo
        </p>
      </Container>

      <Container>
        <form action="" className="form">
          <div className={styles.formRow}>
            <Input id="workTime" labelText="Foco" />
          </div>

          <div className={styles.formRow}>
            <Input id="shortBreakTime" labelText="Descanso curto" />
          </div>

          <div className={styles.formRow}>
            <Input id="longBreakTime" labelText="Descanso longo" />
          </div>

          <div className={styles.formRow}>
            <Button
              icon={<SaveIcon />}
              aria-label="Configurações"
              title="Configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
};
