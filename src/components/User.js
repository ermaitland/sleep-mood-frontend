import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useEffect, useState } from 'react';
import { API } from '../lib/api';

export default function User() {
  const [graphData, setGraphData] = useState({ labels: '', dataset: [] });

  useEffect(() => {
    API.GET(API.ENDPOINTS.alldays, API.getHeaders())
      .then(({ data }) => {
        console.log(data);
        setGraphData({
          labels: data?.day_logged,
          dataset: [
            {
              label: 'Sleep graph',
              date: data?.sleep,
              backgroundColor: [
                'rgba(75,192,192,1)',
                '#ecf0f1',
                '#50AF95',
                '#f3ba2f',
                '#2a71d0'
              ],
              borderColor: 'black',
              borderWidth: 2
            }
          ]
        });
      })
      .catch((e) => console.log(e));
  }, []);

  // const [graphData, setGraphData] = useState({
  //   labels: userData?.map((data) => data?.day_logged),
  //   dataset: [
  //     {
  //       label: 'Sleep graph',
  //       date: userData?.map((data) => data?.sleep),
  //       backgroundColor: [
  //         'rgba(75,192,192,1)',
  //         '#ecf0f1',
  //         '#50AF95',
  //         '#f3ba2f',
  //         '#2a71d0'
  //       ],
  //       borderColor: 'black',
  //       borderWidth: 2
  //     }
  //   ]
  // });
  return <Line data={graphData} />;
}
