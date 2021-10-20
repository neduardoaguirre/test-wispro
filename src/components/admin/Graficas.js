import React from 'react';
import Header from './Header';
import { Line } from '@ant-design/charts';

const Graficas = (props) => {
  const getFakeData = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    let days = new Date(year, month, 0).getDate();
    let arr_days = new Array(days);
    for (let index = 1; index <= days; index++) {
      arr_days.push(String(index));
    }
    const data = [];
    for (let index = 1; index <= day; index++) {
      data.push({
        day: String(index),
        value: Math.floor(Math.random() * 10),
      });
    }
    for (let index = day + 1; index <= days; index++) {
      data.push({ day: String(index), value: 0 });
    }
    return data;
  };

  const data = getFakeData();

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
      <div className="col justify-content-center align-items-center">
        <h1 className="text-center m-5">{props.title}</h1>
        <div className="container col col-md-8 bg-secondary p-3">
          <Line {...config} />
        </div>
      </div>
    </>
  );
};

export default Graficas;
