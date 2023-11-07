import "./App.css";
import { Navbar } from "./components/navbar";
import { SideBar } from "./components/sidebar";
import Router from "./router";

const drawerWidth = 200;

function App() {
  return (
    <>
      <Navbar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />

      <Router />
    </>
  );
}

export default App;
