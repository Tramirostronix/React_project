import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

const data = [
  {
    name: 'Aug', uv: 30
  },
  {
    name: 'Sept', uv: 25
  },
  {
    name: 'Oct', uv: 18
  }, 
  {
    name: 'Nov', uv: 2
  }]

class ChartsAreaTemperature extends React.PureComponent {

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer className="my-container">
          <AreaChart
            data={data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default ChartsAreaTemperature
