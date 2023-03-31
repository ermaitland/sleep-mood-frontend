import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../lib/api';
import { useNavigate } from 'react-router-dom';

export default function SingleDay() {
  const { id } = useParams();
  const [day, setDay] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    API.POST(API.ENDPOINTS.singleDay(id), {}, API.getHeaders())
      .then(({ data }) => {
        setDay(data);
        console.log(data);
      })
      .catch(({ message, response }) => console.log(message, response));
  }, [id]);

  const returnToGraph = () => navigate('/userpage');

  return (
    <section>
      <p>On: {day?.day_logged}</p>
      <p>You felt: {day?.mood.mood}</p>
      <p>You had: {day?.sleep} hours sleep!</p>
      <button onClick={returnToGraph}>Return to Metrics!</button>
    </section>
  );
}
