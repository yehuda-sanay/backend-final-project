import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/featurs/header/Header.component";
import Footer from "./component/featurs/footer/Footer.component";
import Routing from "./Router.component";
// import UsersProvaider from './contexts/UsersProvaider'
import "bootstrap/dist/css/bootstrap.min.css";
import EilataProvaider from './contexts/EilatProvaider'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <EilataProvaider>
        <Header />
        <Routing />
        <Footer />
        </EilataProvaider>
      </BrowserRouter>
    </div>
  );
}

export default App;
