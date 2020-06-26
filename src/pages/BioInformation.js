import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container, DetailBioInformation } from './styled';

const BioInformation = ({ history, match }) => {
  return (
    <Container>
      <DetailBioInformation>
        <span>Bio Information</span>
      </DetailBioInformation>
    </Container>
  )
};

BioInformation.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
  match: PropTypes.oneOfType([PropTypes.object]),
};

BioInformation.defaultProps = {
  history: {},
  match: {},
};

export default withRouter(BioInformation);
