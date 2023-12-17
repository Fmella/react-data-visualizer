import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

import SpeedChart from './components/SpeedChart';
import MiniDrawer from './components/MiniDrawer';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    fetch('https://mockly.app/api/38534cce-0c18-4043-94a6-21b0ae62f48a/speed')
      .then((response) => response.json())
      .then((newData) => {
        if (!ignore) {
          setData(newData);
          setLoading(false);
        }
      });
      
      return () => {
        ignore = true;
      }
  }, []);

  return (
    <>
      <MiniDrawer
        children={<SpeedChart data={data} isLoading={loading} />}>
      </MiniDrawer>
    </>
  );
}
