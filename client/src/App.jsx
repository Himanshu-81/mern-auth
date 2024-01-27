import { Outlet } from "react-router-dom";
import { Header } from "./components/index.js";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
