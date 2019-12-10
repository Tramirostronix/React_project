import React from 'react';
import { storiesOf } from '@storybook/react';
import ChartsAreTemperature from '../components/ChartsAreaTemperature';
import ChartsPieLocalisation from '../components/ChartsPieLocalisation';
import ChartsTooltipCountries from '../components/ChartsTooltipCountries';


storiesOf('Recharts', module)
  .add('ChartsAreaTemperature', () => <ChartsAreTemperature />)
  .add('ChartsPieLocalisation', () => <ChartsPieLocalisation />)
  .add('ChartsTooltipCountries', () => <ChartsTooltipCountries />);


  