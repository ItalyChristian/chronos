import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../Templates/MainTemplate";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SaveIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export const Settings = () => {
  const { state, dispatch } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Configurações - Chronos Pomodoro";
  });

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Digite apenas números");
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push("Digite valores entre 1 e 99 para foco");
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push("Digite valores entre 1 e 30 para descanso curto");
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push("Digite valores entre 1 e 60 para descanso longo");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success("Configurações salvas");
  }

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
        <form onSubmit={handleSaveSettings} action="" className={styles.form}>
          <div className={styles.formRow}>
            <Input
              id="workTime"
              labelText="Foco"
              ref={workTimeInputRef}
              defaultValue={state.config.workTime}
              type="number"
            />
          </div>

          <div className={styles.formRow}>
            <Input
              id="shortBreakTime"
              labelText="Descanso curto"
              ref={shortBreakTimeInputRef}
              defaultValue={state.config.shortBreakTime}
              type="number"
            />
          </div>

          <div className={styles.formRow}>
            <Input
              id="longBreakTime"
              labelText="Descanso longo"
              ref={longBreakTimeInputRef}
              defaultValue={state.config.longBreakTime}
              type="number"
            />
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
