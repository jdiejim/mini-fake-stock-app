import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
`
const Header = styled.header`
  width: 100%;
  height: 20vh;
  padding: 20px;
`

const ChartWrapper = styled.section`
  width: 100%;
  height: 30vh;
`

const DetailsDisplay = (props) => {
  const { markets, match } = props;
  const { firms, data } = markets;
  const ticker = match.params.ticker;
  const currentFirm = firms.find(e => e.ticker === ticker);

  if (!currentFirm) {
    return <div />
  }

  const firmsData = data.filter(e => e.id === currentFirm.id)
                        .map(d => ({
                          day: d['Date'],
                          price: d['Close']
                        }));

  return (
    <Wrapper>
      <Header>
        <h1>{currentFirm.name}</h1>
        <h1>{`$${firmsData[0].price}`}</h1>
      </Header>
      <ChartWrapper>
        <LineChart style={{fontSize: "12px"}} width={730} height={250} data={firmsData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="day" />
        <YAxis type="number" domain={['dataMin', 'dataMax']} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
      </ChartWrapper>
    </Wrapper>
  )
}

export default DetailsDisplay;
