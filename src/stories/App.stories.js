import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from "storybook-react-router"; 
import Formulaire from '../Formulaire';
import Home from '../Home'; 
import Login from '../Login'; 

  storiesOf('App', module)
  .addDecorator(StoryRouter())
  .add('Formulaire', () => <Formulaire />)
  .add('Home', () => <Home />)
  .add('Login', () => <Login /> )