import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Weather(props) {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("http://api.doanky5.huyhoangdev.engineer/WeatherForecast");
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const getData2 = () => {
    axios.get("http://api.doanky5.huyhoangdev.engineer/WeatherForecast")
    .then((res) => {
      setData(res.data);
    }); 

  }


  useEffect(() => {
    getData2();
  }, [])

  return (
    <div>
      weather
      {data && data.map((item, index) => {
        // console.log(item)
        return (
          <div>
            <p>{item.summary}</p>
            <p>{item.temperatureC}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Weather;