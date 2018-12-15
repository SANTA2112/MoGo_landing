import Footer from './Footer';
import React from 'react';

import { compose, withState, withHandlers } from 'recompose';

const state = withState('input', 'handleChange', '');

const handlers = withHandlers({
  inputChange: ({ handleChange }) => e => handleChange(e.target.value),
  handleSubmit: props => e => e.preventDefault(),
});

export default compose(
  state,
  handlers,
)(Footer);
