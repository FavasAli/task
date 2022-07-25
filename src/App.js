import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterScreen from './Screens/RegisterScreen'
import StudentScreen from './Screens/StudentScreen';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RegisterScreen />}/>
          <Route path='/students' element={<StudentScreen />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
