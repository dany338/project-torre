/* eslint-disable jsx-a11y/img-redundant-alt */
import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container, ItemLeft, ItemRight } from './styled';
/* Components */
import { Icon } from '../Icon';
import Skill from '../Skill';

const CardPeople = ({ subjectId, remoter, locationName, name, professionalHeadline, weight, username, picture, skills }) => {
  return (
    <Container to={`/bio/${username}`}>
      <div className="sectionOne">
        <ItemLeft>
          <div className="right img">
            <div className="hexagon-border" />
            <img id={subjectId} src={picture} alt="Image Job" />
          </div>
          <div className="info">
            <span className="main-title">{name} <Icon className="left">integration_instructions</Icon> {Math.round(weight)}</span>
            <span className="second-text">{professionalHeadline}</span>
            <span className="second-text">{remoter && 'Remote'}{' '}{locationName}</span>
          </div>
        </ItemLeft>
      </div>
      <div className="sectionTwo">
        {skills.slice(0, 3).map((skill) => <Skill key={skill.code} {...skill} /> )}
      </div>
      <div className="sectionThree">
        <ItemRight>
          <Icon>person_pin</Icon>
        </ItemRight>
      </div>
    </Container>
  )
};

CardPeople.propTypes = {
  subjectId: PropTypes.string.isRequired,
  remoter: PropTypes.bool.isRequired,
  locationName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  professionalHeadline: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
      name: PropTypes.string,
      weight: PropTypes.number,
    })
  ).isRequired,
};

export default withRouter(CardPeople);
