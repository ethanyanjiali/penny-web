import chai, { expect } from 'chai';
import SampleComponent from '../../scripts/components/SampleComponent';

describe('SampleComponent', () => {
	it('initial value is 0', () => {
		let sampleComponent = new SampleComponent();
		expect(sampleComponent.state.value).to.equal(0);
	})
});
