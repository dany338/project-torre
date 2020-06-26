/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Style Components */
import { DetailJobInformation } from './styled';
import { Container, ItemLeft, ItemRight } from '../components/CardJob/styled';
/* Components */
import { Icon } from '../components/Icon';
/* Services */
import * as TorreServices from '../services';

const JobInformation = ({ match }) => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const load = useCallback(async () => {
    if(typeof match.params.id !== 'undefined') {
      const jonInfo = null; // await TorreServices.apiTorre.getsJobInformation(match.params.id);
      // if (typeof jonInfo.id !== 'undefined' ) {
      //   setData(jonInfo);
      // }
    }
  }, []);

  useEffect(() => {
    if(!loading) {
      load();
      setLoading(true);
    }
  }, [data, load, loading]);

  return (
    <DetailJobInformation>
      {!loading ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#f42f6391" highlightColor="#444">
            <Skeleton height={34} />
          </SkeletonTheme>
        </div>
      ) : ( data &&
        <Container>
          <div className="sectionOne">
            <ItemLeft>
              <div className="right img">
                <div className="hexagon-border"></div>
                <img id={data.id} src={data.attachments[0].address} alt="Image Job" />
              </div>
              <div className="info">
                <span className="main-title">{data.objective}</span>
                <span className="second-text">{data.place.location[0].id}</span>
              </div>
            </ItemLeft>
            <ItemRight>
              <span className="second-text">Quick apply</span>
            </ItemRight>
          </div>
          <div className="sectionTwo">
            <span className="second-text">Compensation: {`${data.compensation.minAmount} to ${data.compensation.maxAmount} ${data.compensation.currency}`}</span>
          </div>
          <div className="sectionThree">
            <ItemRight>
              <Icon className="left">thumb_up</Icon>
              <Icon className="left">thumb_down</Icon>
            </ItemRight>
          </div>
        </Container>
      )}
    </DetailJobInformation>
  )
};

JobInformation.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

JobInformation.defaultProps = {
  match: {},
};

export default withRouter(JobInformation);
