import { useState, useEffect } from 'react';
import { API } from '../lib/api';
import {
  TextField,
  Container,
  Box,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select
} from '@mui/material';
import '../styles/main.scss';

let emptyDay = {
  mood: '',
  sleep: '',
  day_logged: ''
};

export default function AddDay() {
  const [dayPoint, setDayPoint] = useState(emptyDay);
  const [error, setError] = useState(false);
  const [avalibleMood, setAvalibleMood] = useState([]);

  useEffect(() => {
    API.GET(API.ENDPOINTS.moods)
      .then(({ data }) => setAvalibleMood(data))
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (e) => {
    setDayPoint({ ...dayPoint, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      mood: dayPoint.mood,
      sleep: dayPoint.sleep,
      day_logged: dayPoint.day_logged
    };
    API.POST(API.ENDPOINTS.alldays, data, API.getHeaders())
      .then(({ data }) => {
        console.log(data);
        window.location.reload();
      })
      .catch((e) => {
        setError(true);
        console.log(e);
      });
  };

  return (
    <section className='createDayLog'>
      <Container
        maxWidth='lg'
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='number'
              value={dayPoint.sleep}
              onChange={handleChange}
              error={error}
              label='Hours of sleep'
              name='sleep'
              sx={{ width: 400 }}
            />
          </Box>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id='mood'>Mood</InputLabel>
            <Select
              size='small'
              labelId='mood'
              value={dayPoint.mood}
              label='Mood'
              name='mood'
              onChange={handleChange}
            >
              <MenuItem value=''>None</MenuItem>
              {avalibleMood?.map((mood) => (
                <MenuItem value={mood.id} key={mood.id}>
                  {mood.mood}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ mb: 2 }}>
            <TextField
              size='small'
              type='text'
              value={dayPoint.day_logged}
              onChange={handleChange}
              error={error}
              label='YYYY-MM-DD'
              name='day_logged'
              sx={{ width: 400 }}
            />
          </Box>

          <Button type='submit' variant='contained'>
            Submit!
          </Button>
        </form>
      </Container>
    </section>
  );
}
