import React, { useState, useEffect, useCallback, useRouteMatch }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Components */
import SearchBar from '../components/SearchBar';

const SearchOpportunities = ({ history, match }) => {
  return (
    <Container>
      <SearchBar text="Jobs" />
    </Container>
  )
};

SearchOpportunities.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]),
};

SearchOpportunities.defaultProps = {
  history: {},
  match: {},
};

export default withRouter(SearchOpportunities);
