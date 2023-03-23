import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({ graphData }) {
  let dayData = [];
  let sleepData = [];

  const dataToUse = graphData?.data ? graphData.data.length : graphData.length;

  for (let i = 0; i < dataToUse; i++) {
    dayData.push(graphData.data[i].day_logged);
    sleepData.push(graphData.data[i].sleep);
  }

  console.log({ dayData });
  console.log({ sleepData });

  let data = {
    labels: dayData,
    datasets: [
      {
        label: `Hours of sleep`,
        data: sleepData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  console.log('THE DATA', data);

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25
      }
    }
  };

  return (
    <div>
      <Line data={data} height={400} options={options} />
    </div>
  );
}
