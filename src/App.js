import React from 'react'
import Header from './components/Header/Header.module'
import Container from './components/Container/Container.module'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import MatchDetail from './screens/MatchDetail/MatchDetail.screen'
import AllMatch from './screens/AllMatch/AllMatch.screen';



const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Route
          path='/'
          component={AllMatch}
          exact
        />
        <Route
          path='/match/:gameId'
          component={MatchDetail} 
        />
        
      </Container>
    </Router>
  )
}

export default App
