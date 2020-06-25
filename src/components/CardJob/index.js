/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useCallback, useRouteMatch }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container, ItemLeft, ItemRight } from './styled';
/* Components */
import { Icon } from '../Icon';

const CardJob = ({ id, objective, type, organizations, compensation }) => {
  const { id: organizationId, name, picture } = organizations[0];

  return (
    <Container to={`/jobs/${id}`}>
      <div className="sectionOne">
        <ItemLeft>
          <div className="right img">
            <div className="hexagon-border"></div>
            <img id={organizationId} src={picture} alt="Image Job" />
          </div>
          <div className="info">
            <span className="main-title">{objective}</span>
            <span className="second-text">{type}</span>
            <span className="second-text">{name}</span>
          </div>
        </ItemLeft>
        <ItemRight>
          <span className="second-text">Quick apply</span>
        </ItemRight>
      </div>
      <div className="sectionTwo">
        <span className="second-text">Compensation: { (compensation && (`${compensation.data.minAmount} to ${compensation.data.maxAmount}`)) ?? 'to be defined'}</span>
      </div>
      <div className="sectionThree">
        <ItemRight>
          <Icon className="left">thumb_up</Icon>
          <Icon className="left">thumb_down</Icon>
        </ItemRight>
      </div>
    </Container>
  )
};

CardJob.propTypes = {
  id: PropTypes.string.isRequired,
  objective: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  compensation: PropTypes.oneOfType([PropTypes.any, PropTypes.object]),
  organizations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture: PropTypes.string,
    })
  ).isRequired,
};

CardJob.defaultProps = {
  compensation: null,
};

export default withRouter(CardJob);
