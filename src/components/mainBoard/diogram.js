import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'ДЕК 15',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'ДЕК 16',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'ДЕК 17',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'ДЕК 18',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'ДЕК 19',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'ДЕК 20',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'ДЕК 21',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Diogram() {
    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart width={150} height={40} data={data}>
        <CartesianGrid horizontal='true' vertical='' />
        <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#8884d8" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
}
