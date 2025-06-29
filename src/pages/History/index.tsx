import { TrashIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../Templates/MainTemplate";
import styles from "./styles.module.css";

export const History = () => {
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <Button
              icon={<TrashIcon />}
              color="red"
              aria-label="Apagar histórico"
              title="Apagar histórico"
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {Array.from({ length: 20 }).map((_, index) => {
                return (
                  <tr key={index}>
                    <td>Estudar</td>
                    <td>25min</td>
                    <td>20/04/2025 08:00</td>
                    <td>Completa</td>
                    <td>Foco</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
};
