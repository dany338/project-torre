import React, { useState, useEffect, useCallback }  from 'react';
import PropTypes from 'prop-types';
import { withRouter, useRouteMatch } from 'react-router-dom';
/* Style Components */
import { Container, ItemTop, ItemButton, LinkPage } from './styled';

const Nav = ({ history, match }) => {
  let isActivePeople = useRouteMatch({
    path: '/people',
    exact: true
  });

  let isActiveJobs = useRouteMatch({
    path: '/jobs',
    exact: true
  });

  return (
    <Container>
      <ItemTop>
        <span>Search</span>
      </ItemTop>
      <ItemButton>
        <LinkPage to="/people" active={isActivePeople}>
          PEOPLE
        </LinkPage>
        <LinkPage to="/jobs" active={isActiveJobs}>
          JOBS
        </LinkPage>
      </ItemButton>
    </Container>
  )
};

Nav.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]),
};

Nav.defaultProps = {
  history: {},
  match: {},
};

export default withRouter(Nav);
