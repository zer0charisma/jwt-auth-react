import './App.css';
import { Navigate, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Protected from "./Protected"
import Navbar from "./Navbar"
import Login from "./Login"
import Profile from "./Profile"

import {authToken} from './authToken'
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory();
  const token = localStorage.getItem("token");
  if (token) {
      // set the authorization token
      authToken(token);
  }
  return (
    <div className="App">
      <Router history={history}>
      <Navbar />
      <Routes>
       <Route path='/profile' element={
         <Protected>
           <Profile />
         </Protected>
       }
       />
       <Route path='/' element={<Login />} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
