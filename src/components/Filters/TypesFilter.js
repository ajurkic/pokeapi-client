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
                <Checkbox>Ground</Checkbox>
                <Checkbox>Bug</Checkbox>
                <Checkbox>Dragon</Checkbox>
                <Checkbox>Psychic</Checkbox>
            </div>
        );
    };
}

export default TypesFilter;