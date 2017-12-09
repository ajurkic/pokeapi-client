import React, { Component } from 'react';

import './css/App.css'; 

import FiltersContainer from './containers/filters-container';
import GroupsContainer from './containers/groups-container';
import PokemonContainer from './containers/pokemon-container';


class App extends Component {

  render() {
    return (
      <div className="main">
        <div className="bm-burger-button"></div>

        <FiltersContainer/>
        <div className='right-side-wrapper'>
          <GroupsContainer />
          <PokemonContainer />
        </div>

      </div>
    );
  }
}

export default App;
