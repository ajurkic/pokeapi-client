import React, { Component } from 'react';
import { Radio } from 'react-bootstrap';

class MovesFilter extends Component
{
    render(){
        return (
            <div className='moves-criteria'>
                <h3>Moves:</h3>
                <Radio name='radioGroup'>1</Radio>
                <Radio name='radioGroup'>2</Radio>
                <Radio name='radioGroup'>3</Radio>
                <Radio name='radioGroup'>4</Radio>
            </div>
        );
    };
}

export default MovesFilter;