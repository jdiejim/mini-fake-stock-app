import React from 'react';
import { Link } from 'react-router-dom';
import { darken } from 'polished';
import Stock from './Stock';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${darken(0.2, '#F3F7FA')};
  font-size: 16px;
`

const StockList = ({ markets }) => {
  const { firms, data } = markets;
  const stocks = firms.map(e =>
    <Link to={`/t/${e.ticker}`} key={`${e.ticker}-${e.id}`}>
      <Stock
        info={e}
        prices={data.filter(l => l.id === e.id)[0]}
      />
    </Link>);

  return (
    <Wrapper>
      {/* <Input placeholder='Search by ticker or name'/> */}
      {stocks}
    </Wrapper>
  )
}

export default StockList;
