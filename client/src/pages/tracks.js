import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card'
import QueryResult from '../components/query-result'

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      length
      modulesCount
      thumbnail
      author {
        id
        name
        photo
      }
    }
  }
`;

/**
 * Tacks Page is Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
      {
        data?.tracksForHome?.map((track) => (
          <TrackCard track={track} key={track.id} />
        ))
      }
    </QueryResult>
  </Layout>;
};

export default Tracks;
