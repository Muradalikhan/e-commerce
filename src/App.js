import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import RouterApp from "./config/router/router";
import MainLayout from "./layout/mainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <RouterApp />
      </MainLayout>
    </div>
  );
}

export default App;
