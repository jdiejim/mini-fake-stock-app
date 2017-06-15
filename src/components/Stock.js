import React from 'react';
import { darken } from 'polished';
import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  width: 90%;
  height: 80px;
  padding: 10px;
  margin: 10px auto;
  background-color: #F3F7FA;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  color: #757575;
  font-size: 12px;
  text-align: left;
  h1 {
    color: #757575;
    font-size: 20px;
  }
  .change-diff {
    color: #6CBFAD;
  }
  &:hover {
    background-color: ${darken(0.2, '#F3F7FA')};
  }
`

const StockInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`

const StockPrice = styled.div`
  display: flex;
  align-items: center;
  color: #6CBFAD;
  span {
    color: #757575;
    font-size: 10px;
    font-weight: normal;
  }
`

const Stock = (props) => {
  const { info, prices } = props;
  const change = `${prices['Change']}%`;

  return (
    <Article>
      <StockInfo>
        <p className='company-name'>{ info.name }</p>
        <h1>{ info.ticker }</h1>
        <p className='change-diff'>{change}</p>
      </StockInfo>
      <StockPrice>
        <h1>{ prices['Close']}<span>USD</span></h1>
      </StockPrice>
    </Article>
  )
}

export default Stock;
