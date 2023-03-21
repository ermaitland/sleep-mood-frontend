import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import Graph from './Graph';

export default function User() {
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    API.GET(API.ENDPOINTS.alldays, API.getHeaders())
      .then((data) => {
        setGraphData(data);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(graphData);

  return (
    <div>
      <Graph graphData={graphData} />
    </div>
  );
}
