import React, { useState, useEffect, useCallback }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container, ItemLeft } from './styled';
/* Components */
import { Icon } from '../Icon';

const SearchBar = ({ text }) => {
  return (
    <Container>
      <ItemLeft>
        <Icon className="right">search</Icon>
        <input type="text" placeholder={`Search ${text}`} maxLength="Infinity" tabIndex="0" autoComplete="off"></input>
      </ItemLeft>
    </Container>
  )
};

SearchBar.propTypes = {
  text: PropTypes.string,
};

SearchBar.defaultProps = {
  text: '',
};

export default withRouter(SearchBar);
