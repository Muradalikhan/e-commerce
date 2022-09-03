import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import RouterApp from "./config/router/router";
import MainLayout from "./layout/mainLayout";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <RouterApp />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
