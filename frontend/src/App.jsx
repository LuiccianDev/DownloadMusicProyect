
import Footer from "./sections/Footer"
import Navbar from "./sections/Navbar"
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutesPaths from "./routes/AppRoutesPaths"

function App() {


  return (
    <>
      <Router>
        <div>
          <Navbar />
          <AppRoutesPaths />
          <Footer />
        </div>
      </Router>

    </>
  )
}

export default App
