import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Card";
import Projects from "./pages/Projects";
import Project from './pages/Project';
import Contacts from "./pages/Contacts";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
