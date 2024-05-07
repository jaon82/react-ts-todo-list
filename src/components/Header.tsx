import styes from "./Header.module.css";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className={styes.header}>
      <img src={Logo} alt="ToDo List logo" />
    </header>
  );
}
