import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

const InputListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`;

const InputListInputLeft = styled.div`
  flex: 1;
`;

const InputListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  flex: 5;
`;

export default class InputList extends PureComponent {
  static defaultProps = {
    values: {},
    labels: [],
  }

  static propTypes = {
    values: PropTypes.object,
    labels: PropTypes.array,
    onChange: PropTypes.func,
    unit: PropTypes.string,
  }

  render() {
    const {
      values, labels, unit, onChange,
    } = this.props;
    return (
      <InputListContainer>
        {labels.map(label => (
          <InputListRow>
            <InputListInputLeft>
              <b>{label}</b>
            </InputListInputLeft>
            <StyledInput
              onChange={onChange}
              name={label}
              value={values[label]}
              label={{
                basic: true,
                content: unit,
              }}
              labelPosition="right"
            />
          </InputListRow>
        ))}
      </InputListContainer>
    );
  }
}
