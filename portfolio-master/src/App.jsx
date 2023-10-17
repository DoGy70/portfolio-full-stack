import {
  About,
  Navbar,
  Skills,
  Projects,
  Links,
  Certificates,
  Contact,
} from "./components";
import { useProjectsContext } from "./context/projects_context";

const App = () => {
  return (
    <main>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Links />
    </main>
  );
};
export default App;
