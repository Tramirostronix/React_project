import React from 'react';
import { storiesOf } from '@storybook/react';
import Todolist from '../components/Todolist';

  storiesOf('Todolist', module)
  .add('Todolist', () => <Todolist />);