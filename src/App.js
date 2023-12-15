import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://mockly.app/api/38534cce-0c18-4043-94a6-21b0ae62f48a/speed')
      .then((response) => response.json())
      .then((newData) => {
        setData(newData[0]);
      });
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some masdasdasdasdagic happen :)</p>
    </div>
  );
}
