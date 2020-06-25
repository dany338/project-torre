import React, { useState, useEffect, useCallback, useRouteMatch }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';

const JobInformation = ({ history, match }) => {
  return (
    <Container>
      ...
    </Container>
  )
};

JobInformation.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]),
};

JobInformation.defaultProps = {
  history: {},
  match: {},
};

export default withRouter(JobInformation);
