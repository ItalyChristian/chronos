import "./styles/theme.css";
import "./styles/global.css";

// import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { Input } from "./components/Input";

export function App() {
  console.log("E ai");

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Input
              id="meuInput"
              type="text"
              labelText="labelText"
              placeholder="Digite aqui"
            />
          </div>

          <div className="formRow">
            <p>lorem ipsum lorem ipsum</p>
          </div>

          <div className="formRow">
            <p>ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
