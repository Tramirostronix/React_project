//utilisation de la bibliotheque recharts 
//http://recharts.org/en-US/examples/ComposedResponsiveContainer

import React from 'react';
import {ResponsiveContainer, PieChart, Pie} from 'recharts';


const data= [
  { localisation: 'Groupe A', value: 400 },
   { localisation: 'Group B', value: 100 },
  { localisation: 'Group C', value: 300 },
   { localisation: 'Group D', value: 200 },
];

class ChartsPieLocalisation extends React.PureComponent {
//static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

  render() {
    return (
      <div style={{ width: '100%', height: 230 }}>
        <ResponsiveContainer> 
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default ChartsPieLocalisation