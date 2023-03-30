import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import Graph from './Graph';
import AddDay from './addDay';
import '../styles/main.scss';
import { Button } from '@mui/material';
import { AUTH } from '../lib/auth';
import { useNavigate } from 'react-router-dom';

export default function User() {
  const navigate = useNavigate();
  const [graphData, setGraphData] = useState({});

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

  return (
    <section className='main'>
      <Button
        onClick={logout}
        variant='contained'
        sx={{ color: 'black', pl: 2, pr: 2 }}
        className='logout'
      >
        Logout
      </Button>
      <h1 className='title'>Welcome to your sleep graph!</h1>
      <h1 className='title'>Add todays data!</h1>
      <Graph graphData={graphData} />
      <AddDay />
    </section>
  );
}
