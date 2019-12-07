import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from "storybook-react-router"; 
import Main from "../components/Main"


  storiesOf('Main', module)
  .addDecorator(StoryRouter())
  .add('Main', () => <Main />)