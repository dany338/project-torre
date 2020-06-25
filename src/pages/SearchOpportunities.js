import React, { useState, useEffect, useCallback, useRouteMatch }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Style Components */
import { Container } from './styled';
/* Components */
import SearchBar from '../components/SearchBar';
import CardJob from '../components/CardJob';
/* Services */
import * as TorreServices from '../services';

const SearchOpportunities = ({ history, match }) => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const load = useCallback(async () => {
    const opportunities = await TorreServices.apiTorre.searchOpportunities({}, 0, 20, false);
    if (typeof opportunities.results !== 'undefined' && Array.isArray(opportunities.results)) {
      setData(opportunities.results);
    }
  }, []);

  useEffect(() => {
    if(data.length === 0 && !loading) {
      load();
      setLoading(true);
    }
  }, [data, load, loading]);

  return (
    <Container>
      <SearchBar text="Jobs" />
      {!loading ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#f42f6391" highlightColor="#444">
            <Skeleton height={34}/>
          </SkeletonTheme>
        </div>
      ) : (
        <>
          {data.map((job) => ( <CardJob key={job.id} {...job} /> ))}
        </>
      )}
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
