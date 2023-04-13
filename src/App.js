import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import SignIn from "./Pages/SignIn";
import ApplicationFormPage from "./Pages/ApplicationFormPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
            <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" exact element={<ApplicationFormPage />} />
                </Routes>
            </Router>
      {/* <Button variant="contained">Hello World</Button> */}
      </header>
    </div>
  );
}

export default App;
