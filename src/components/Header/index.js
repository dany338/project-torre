import React, { useState, useEffect, useCallback }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container, ItemLeft, ItemRight } from './styled';
/* Components */
import { Icon } from '../Icon';

const Header = ({ history, match }) => {
  return (
    <Container>
      <ItemLeft>
        <Icon className="right">menu</Icon>
        <span>Torre</span>
      </ItemLeft>
      <ItemRight>
        <Icon>search</Icon>
        <Icon className="left">integration_instructions</Icon>
        <Icon className="left">record_voice_over</Icon>
      </ItemRight>
    </Container>
  )
};

Header.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]),
};

Header.defaultProps = {
  history: {},
  match: {},
};

export default withRouter(Header);
