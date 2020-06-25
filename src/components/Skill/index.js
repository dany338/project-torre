import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Components */
import { Icon } from '../Icon';

const Skill = ({ name, weight }) => (
  <Container>
    <span className="right">{name}</span>
    <Icon className="right">integration_instructions</Icon>
    <span>{Math.round(weight)}</span>
  </Container>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
};

export default withRouter(Skill);
