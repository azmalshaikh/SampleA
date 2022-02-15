import './App.css';
import Job from './Job';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from './Post';
import { useReducer } from 'react';

function App() {

  const initialState = {
    title: "",
    des: "",
    exp: "",
    skills: "",
    remote: "",
    ctc: "",
    etype: "",
    year: "",
    city: "",
    state: "",
    zip: ""
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "changethis":
        return {
          ...state,
          [action.field]: action.payload,
        };
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Job state={state} dispatch={dispatch} />}></Route>
          <Route path="/v1jobs/job" element={<Post state={state} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
