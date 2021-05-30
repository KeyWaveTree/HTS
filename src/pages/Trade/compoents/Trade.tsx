import { Container, Grid, Tabs } from '@material-ui/core';

const Trade = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xl={12} lg={2} style={{ backgroundColor: '#ff2fff' }}>
          검색
        </Grid>
        <Grid item xl={12} lg={10} style={{ backgroundColor: 'blue' }}>
          <Grid container>
            <Grid item xl={12} lg={12} style={{ backgroundColor: '#ff2fff' }}>
              현재가
            </Grid>
            <Grid item xl={12} lg={12} style={{ backgroundColor: '#ff2fff' }}>
              차트
            </Grid>
            <Grid item xl={12} lg={6} style={{ backgroundColor: '#ff2fff' }}>
              호가
            </Grid>
            <Grid item xl={12} lg={6} style={{ backgroundColor: '#ff2fff' }}>
              거래
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Trade;
