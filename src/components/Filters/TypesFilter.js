import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class TypesFilter extends Component
{
    render(){
        return (
            <div className='type-criteria'>
                <h3>Type:</h3>
                <Checkbox>Fire</Checkbox>
                <Checkbox>Water</Checkbox>
                <Checkbox>Poison</Checkbox>
                <Checkbox>Grass</Checkbox>
            </div>
        );
    };
}

export default TypesFilter;