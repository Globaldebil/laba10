import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ListPage from "./pages/ListPage";

import styles from "./App.module.css"
import Nav from './components/Nav';
import CreatePage from './pages/CreatePage';

function App() {
  return (
  <div className={styles.appContainer}>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/add-movie" element={<CreatePage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;