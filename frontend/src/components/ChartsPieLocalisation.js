//utilisation de la bibliotheque recharts 
//http://recharts.org/en-US/examples/ComposedResponsiveContainer

import React from 'react';
import {ResponsiveContainer, PieChart, Pie, Cell} from 'recharts';
import { Container, Row} from "react-bootstrap"

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class ChartsPieLocalisation extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={210}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
      </Row>
      </Container>
    );
  }
}

/*

const data= [
  { localisation: 'kitchen', value: 400 },
   { localisation: 'livingRoom', value: 100 },
  { localisation: 'bedRoom', value: 300 },
   { localisation: 'bathRoom', value: 200 },
];

class ChartsPieLocalisation extends React.PureComponent {
//static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  render() {
    return (
      <div style={{ width: '100%', height: 230 }}>
        <ResponsiveContainer> 
          <PieChart>
            <Pie  dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
*/
export default ChartsPieLocalisation