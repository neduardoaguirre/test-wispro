import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Line } from '@ant-design/charts';

const Graficas = (props) => {
  const [data, setData] = useState([]);

  const getFakeData = () => {
    const year = new Date().getFullYear();
    let month = new Date().getMonth();
    if (month === 0) month = 12;
    let days = new Date(year, month, 0).getDate();
    const data = [];
    for (let index = 1; index <= days; index++) {
      data.push({
        day: String(index),
        value: Math.floor(Math.random() * 10),
      });
    }
    return data;
  };

  useEffect(() => {
    setData(getFakeData());
  }, []);

  const config = {
    data,
    height: 300,
    xField: 'day',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  return (
    <>
      <Header />
      <div className="col justify-content-center align-items-center mb-5">
        <h1 className="text-center m-5">{props.title}</h1>
        <div className="container col col-md-8 bg-secondary p-3">
          <Line {...config} />
        </div>
      </div>
    </>
  );
};

export default Graficas;
