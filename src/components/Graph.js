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
  // let moodData = [];

  const dataToUse = graphData?.data ? graphData.data.length : graphData.length;

  for (let i = 0; i < dataToUse; i++) {
    dayData.push(graphData.data[i].day_logged);
    sleepData.push(graphData.data[i].sleep);
    // moodData.push(graphData.data[i].mood);
  }

  console.log({ dayData });
  console.log({ sleepData });

  let data = {
    labels: dayData.sort(),
    // tooltipText: moodData,
    datasets: [
      {
        label: `Hours of sleep`,
        data: sleepData,
        backgroundColor: ['blue'],
        borderColor: ['blue'],
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
      <Line data={data} height={300} width={200} options={options} />
    </div>
  );
}
