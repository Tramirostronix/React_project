import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from "storybook-react-router"; 
import Banniere from '../components/Banniere';
import BanniereFormulaire from '../components/BanniereFormulaire'; 
import BanniereLogOut from "../components/BanniereLogOut"; 

  storiesOf('Bannieres', module)
  .addDecorator(StoryRouter())
  .add('Banniere', () => <Banniere />)
  .add('BanniereFormulaire', () => <BanniereFormulaire />)
  .add('BanniereLogOut', () => <BanniereLogOut /> )