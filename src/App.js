import './App.css';
import { Routes, Route} from "react-router-dom"
import { Signup } from "./Authentication"

function App() {
  
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signin" element={<Signup />}/>
    </Routes>
    
  );
}

export default App;
