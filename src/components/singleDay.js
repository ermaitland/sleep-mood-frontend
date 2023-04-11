import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import '../styles/main.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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
    <section className='singleDay'>
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: '#73c2fb',
          pt: 10,
          pb: 10,
          width: 700,
          ml: 50
        }}
      >
        <CardContent>
          <Typography variant='h5' component='div'>
            On: {day?.day_logged}
          </Typography>
          <Typography sx={{ fontSize: 18 }} color='text.secondary'>
            You felt: {day?.mood.mood}
          </Typography>
          <Typography sx={{ fontSize: 18 }} color='text.secondary'>
            You had: {day?.sleep} hours sleep!
          </Typography>
        </CardContent>
        <CardActions>
          <button className='button' onClick={returnToGraph}>
            Return to Metrics!
          </button>
        </CardActions>
      </Card>
    </section>
  );
}
