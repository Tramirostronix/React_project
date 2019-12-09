import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from "storybook-react-router"; 
import FormField from "../components/FormField"

  storiesOf('FormField', module)
  .addDecorator(StoryRouter())
  .add('FormField', () => <FormField />)