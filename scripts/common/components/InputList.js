import React, { Component } from 'react';
import { Input, Image } from 'semantic-ui-react';

export default class InputList extends Component {
    render() {
        const { values = {}, labels = [], unit, onChange } = this.props;
        return (
            <div className='input-list-container'>
            {labels.map((label, index) => {
                return <div className='input-list-row'>
                    <div className='input-list-input-left'>
                        {/* <Image avatar style={{ marginRight: '5px' }} src={require(`../../../assets/images/avatar_${index % 11}.png`)} /> */}
                        <b>{ label }</b>
                    </div>
                    <Input
                        onChange={ onChange }
                        name={ label }
                        value={ values[label] }
                        className='input-list-input-right'
                        label={{ basic: true, content: unit }}
                        labelPosition='right'
                    />
                </div>;
            })}
            </div>
        );
    }
}