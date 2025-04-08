
import './App.css';
import MainRoute from './MainRoute';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
        <MainRoute/>
        <ToastContainer position='top-right'/>
    </div>
  );
}

export default App;
