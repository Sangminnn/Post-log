import React from 'react';
import { Route } from 'react-router-dom';
import { MainWrapper } from 'components/Base/Main';
import { MainList } from 'containers/Base';

function Home() {

  return (
    <MainWrapper>
      <Route path='/' component={MainList}/>
    </MainWrapper>
  )
};

export default Home;