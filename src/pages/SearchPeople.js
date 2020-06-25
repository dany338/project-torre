import React, { useState, useEffect, useCallback, useRouteMatch }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Components */
import SearchBar from '../components/SearchBar';

const SearchPeople = ({ history, match }) => {
  return (
    <Container>
      <SearchBar text="People" />
    </Container>
  )
};

SearchPeople.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]),
};

SearchPeople.defaultProps = {
  history: {},
  match: {},
};

export default withRouter(SearchPeople);
