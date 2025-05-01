import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import AddEditJob from "./pages/AddEditJob";
import JobDetails from "./pages/JobDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add" element={<AddEditJob />} />
        <Route path="/edit/:id" element={<AddEditJob />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
