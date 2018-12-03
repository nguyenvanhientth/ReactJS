import React, { Component } from 'react';
export default class ListItem extends Component {
    render(){
        return(
            <div>
                <h2>Lich Toi!</h2>
                <div className="ListItem">
                    <p>{this.props.title}</p>
                </div>
            </div>
        );
    }
}