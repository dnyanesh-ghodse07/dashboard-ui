import "./App.css";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import Router from "./router";

const drawerWidth = 200;

function App() {
  return (
    <>
      <Sidebar drawerWidth={drawerWidth} />
      <Navbar drawerWidth={drawerWidth} />

      <Router />
    </>
  );
}

export default App;
