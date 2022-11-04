import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import Linkedtree from "./components/linkedtree/linkedtree";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Linkedtree />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <footer>
        <Footer/>
      </footer> 
    </>
  );
}

export default App;
