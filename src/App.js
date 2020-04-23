import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="App">
      <Header title="demo" />

      <Content>
        <div>time:</div>
        {time.toLocaleString()}
      </Content>
    </div>
  );
}

export default App;
