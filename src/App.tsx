import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Example pages
import HomePage from "./pages/Home";

// Components
import Header from "./components/layout/Header";
import WelcomeCard from "./components/layout/WelcomeCard";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-400">
        <Header />
        <main className="px-6 md:px-20 py-10">
          <WelcomeCard />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
