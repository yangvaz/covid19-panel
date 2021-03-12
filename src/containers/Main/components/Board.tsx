import { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from '../../../components';
import Card from './Card'

// interface DataProps {
//   data: {
//     cases: number,
//     todayDeaths: number,
//     recovered: number,
//     deaths: number,
//     todayCases: number,
//   }
// }

function Board({ data }: any) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const getValue = (value: any) => value ? value : <Skeleton variant="text" width={182} height={60} />
  console.log(getValue(cases));
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
    </Grid>
  )
}

export default Board;