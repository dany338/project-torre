import React, { useState, useEffect, useCallback, useRouteMatch }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';

const CardPeople = ({ history, match }) => {
  return (
    <Container>
      Torre
    </Container>
  )
};

CardPeople.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]),
};

CardPeople.defaultProps = {
  history: {},
  match: {},
};

export default withRouter(CardPeople);
