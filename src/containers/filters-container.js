import React, { Component } from 'react';
import WeightFilter from '../components/Filters/WeightFilter';
import TypesFilter from '../components/Filters/TypesFilter'
import BaseXPFilter from '../components/Filters/BaseXPFilter';

class FiltersContainer extends Component
{
    render(){
        return (
            <div className='filter-container'>
                <WeightFilter />
                <TypesFilter />
                <BaseXPFilter />
            </div>
        );
    };
}

export default FiltersContainer;