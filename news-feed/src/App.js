import React, { useState } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import PropTypes from 'prop-types';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [progress, setprogress] = useState(0)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#363f3f';
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Dark mode disabled', 'success');
    }
  };

  return (
    <Router>
      <>
        <Navbar title="Daily News" mode={mode} onClick={changeMode} />
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
        <Routes>
          <Route exact path="/general" element={<News setprogress={setprogress} key="general" mode={mode} pageSize={8} country={"in"} category={"general"} />} />
          <Route exact path="/business" element={<News setprogress={setprogress} key="business" mode={mode} pageSize={8} country={"in"} category={"business"} />} />
          <Route exact path="/entertainment" element={<News setprogress={setprogress} key="entertainment" mode={mode} pageSize={8} country={"in"} category={"entertainment"} />} />
          <Route exact path="/health" element={<News setprogress={setprogress} key="health" mode={mode} pageSize={8} country={"in"} category={"health"} />} />
          <Route exact path="/science" element={<News setprogress={setprogress} key="science" mode={mode} pageSize={8} country={"in"} category={"science"} />} />
          <Route exact path="/sports" element={<News setprogress={setprogress} key="sports" mode={mode} pageSize={8} country={"in"} category={"sports"} />} />
          <Route exact path="/technology" element={<News setprogress={setprogress} key="technology" mode={mode} pageSize={8} country={"in"} category={"technology"} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
