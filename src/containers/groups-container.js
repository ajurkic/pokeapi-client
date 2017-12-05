import React, { Component } from 'react';

class GroupsContainer extends Component
{
    render(){
        return(
            <div className='group-container'>

                <div className='btn-container'>
                    <div className='circle-btn'>1</div>
                    <h4>Fire + Flying</h4>
                </div>

                <div className='btn-container'>
                    <div className='circle-btn'>2</div>
                    <h4>Ground + Grass</h4>
                </div>

                <div className='btn-container'>
                    <div className='circle-btn'>3</div>
                    <h4>Water + Psychic</h4>
                </div>

                <div className='btn-container'>
                    <div className='circle-btn'>4</div>
                    <h4>Group 4</h4>
                </div>
            </div>
        );
    };
}

export default GroupsContainer;