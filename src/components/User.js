import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import Graph from './Graph';
import AddDay from './addDay';
import '../styles/main.scss';
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { AUTH } from '../lib/auth';
import { useNavigate, useParams } from 'react-router-dom';

export default function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [graphData, setGraphData] = useState({});
  const [days, setDays] = useState();

  useEffect(() => {
    API.GET(API.ENDPOINTS.alldays, API.getHeaders())
      .then((data) => {
        setGraphData(data);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(graphData);

  const logout = () => {
    AUTH.logout();
    navigate('/');
  };

  const handleChange = () => navigate(`/userpage/${id}`);

  return (
    <section className='main'>
      <section>
        <Button
          onClick={logout}
          variant='contained'
          sx={{ color: 'black', pl: 2, pr: 2 }}
          className='logout'
        >
          Logout
        </Button>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id='mood'>Mood</InputLabel>
          <Select
            size='small'
            labelId='mood'
            // value={days?.mood}
            label='Mood'
            name='mood'
            onChange={handleChange}
          >
            <MenuItem value=''>None</MenuItem>
            {graphData?.data ? (
              graphData?.data.map((day) => (
                <MenuItem value={day.id} key={day.id}>
                  {day.day_logged}
                </MenuItem>
              ))
            ) : (
              <p>No Data to show at this time, please try again!</p>
            )}
          </Select>
        </FormControl>
      </section>
      <h1 className='title'>Welcome to your sleep graph!</h1>
      <h1 className='title'>Add todays data!</h1>
      <Graph graphData={graphData} />
      <AddDay />
    </section>
  );
}
