import WhatWeDo from './WhatWeDo';
import { withState, withHandlers, compose } from 'recompose';

const state = withState('isActiveAcc', 'toggleIsActive', 1);

const handlers = withHandlers({
  toggleActive: ({ toggleIsActive }) => value => toggleIsActive(value)
});

export default compose(
  state,
  handlers
)(WhatWeDo)
