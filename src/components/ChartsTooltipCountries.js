//utilisation de la bibliotheque Recharts 
//http://recharts.org/en-US/examples/ComposedResponsiveContainer

import React from 'react';
import {ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts'


const data = [
  {
    id: 'Arg' , VenteParPays: 2400, 
  },
  {
    id: 'Col', VenteParPays: 1398
  },
  {
    id: 'Chi', VenteParPays: 9800
  },
  {
    id: 'Indo', VenteParPays: 3908
  },
  {
    id: 'Nor', VenteParPays: 4800
  },
  {
    id: 'Thai', VenteParPays: 3800
  },
  {
    id: 'Spai', VenteParPays: 4300
  },
  {
    id: 'Bela', VenteParPays: 4300
  },
  {
    id: 'Port', VenteParPays: 4300
  },
  {
    id: 'Viet', VenteParPays: 4300
  },
  {
    id: 'Mali', VenteParPays: 4300
  },
  {
    id: 'Fra', VenteParPays: 4300
  },
  {
    id: 'Mala', VenteParPays: 4300
  },
  {
    id: 'Rus', VenteParPays: 4300
  },
];


const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

 class ChartsTooltipCountries extends React.PureComponent {
  render() {
    return (
      //parametre de l'ensemble du graphique

      <div style={{ width: '100%', height: 300 }}>
        
      <ResponsiveContainer className="my-container">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Bar dataKey="VenteParPays" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    )
  }
}

export default ChartsTooltipCountries