import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from "storybook-react-router"; 
import Navbar from '../components/Navbar';
import NavbarLogin from '../components/NavbarLogin'


  storiesOf('NavBars', module)
  .addDecorator(StoryRouter())
  .add('Navbar', () => <Navbar />)
  .add('NavbarLogin', () => <NavbarLogin />)