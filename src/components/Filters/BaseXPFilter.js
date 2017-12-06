import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class BaseXPFilter extends Component
{
    render(){
        return (
            <div className='abilities-criteria'>
                <h3>Base exp:</h3>
                <DropdownButton id='dropdown' title='Choose...'>
                    <MenuItem>1-20</MenuItem>
                    <MenuItem>21-50</MenuItem>
                    <MenuItem>51-100</MenuItem>
                    <MenuItem>100+</MenuItem>
                </DropdownButton>
            </div>
        );
    };
}

export default BaseXPFilter;