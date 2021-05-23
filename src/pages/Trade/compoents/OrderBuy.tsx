import { Box, Grid, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Hidden } from '@material-ui/core';
import { type } from 'node:os';

type OrderBuyType = {
  index: number;
  value: number;
};

const LabelStyle = {
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  JustifyContent: 'conter',
};

const OrderBuy = (props: OrderBuyType) => {
  const { index, value } = props;
  return (
    <Box hidden={index !== value}>
      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelStyle}>
            <FormLabel>주문구분</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <RadioGroup>
              <FormControlLabel control={<Radio />} label="지정가" />
            </RadioGroup>
          </Grid>
        </Grid>
      </FormControl>
      <FormControl fullWidth>
        <Grid container>
          <Grid item xs={3} style={LabelStyle}>
            <FormLabel>주문가능</FormLabel>
          </Grid>
          <Grid item xs={9}>
            <Box>얼마일까요</Box>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};
export default OrderBuy;
