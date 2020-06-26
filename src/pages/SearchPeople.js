import React, { useState, useEffect, useCallback }  from 'react';
import { withRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Style Components */
import { Container } from './styled';
/* Components */
import SearchBar from '../components/SearchBar';
import CardPeople from '../components/CardPeople';
/* Services */
import * as TorreServices from '../services';

const SearchPeople = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const load = useCallback(async () => {
    const peoples = await TorreServices.apiTorre.searchPeople({}, 0, 20, false);
    if (typeof peoples.results !== 'undefined' && Array.isArray(peoples.results)) {
      setData(peoples.results);
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
      <SearchBar text="People" />
      {!loading ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#f42f6391" highlightColor="#444">
            <Skeleton height={34} />
          </SkeletonTheme>
        </div>
      ) : (
        <>
          {data.map((people) => <CardPeople key={people.subjectId} {...people} /> )}
        </>
      )}
    </Container>
  )
};

export default withRouter(SearchPeople);
