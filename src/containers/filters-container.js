import React, { Component } from 'react';
import MovesFilter from '../components/Filters/MovesFilter';
import TypesFilter from '../components/Filters/TypesFilter'
import AbilitiesFilter from '../components/Filters/AbilitiesFilter';

class FiltersContainer extends Component
{
    render(){
        return (
            <div className='filter-container'>
                <MovesFilter />
                <TypesFilter />
                <AbilitiesFilter />
            </div>
        );
    };
}

export default FiltersContainer;