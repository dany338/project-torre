import React, { useState, useEffect, useCallback, useRouteMatch }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';

const CardJob = ({ history, match }) => {
  return (
    <Container>
      Torre
    </Container>
  )
};

CardJob.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]),
};

CardJob.defaultProps = {
  history: {},
  match: {},
};

export default withRouter(CardJob);
