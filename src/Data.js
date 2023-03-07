import { useEffect, useState } from 'react';
import { API } from './lib/api';

const GetData = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    API.GET(API.ENDPOINTS.alldays, API.getHeaders())
      .then(({ data }) => {
        setUserData(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);
};
GetData();
