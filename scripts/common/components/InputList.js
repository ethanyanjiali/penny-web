import React, { Component } from 'react';
import { Input, Image } from 'semantic-ui-react';

export default class InputList extends Component {
    render() {
        const { values = {}, labels = [], unit, onChange } = this.props;
        return (
            <div>
            {labels.map((label, index) => {
                return <div className='input-list-row'>
                    <Image avatar src={require(`../../../assets/images/avatar_${index % 11}.png`)} />
                    { label }
                    <Input
                        onChange={ onChange }
                        name={ label }
                        value={ values[label] }
                        className='input-list-row-input'
                        label={{ basic: true, content: unit }}
                        labelPosition='right'
                    />
                </div>;
            })}
            </div>
        );
    }
}