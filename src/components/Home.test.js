import React from 'react';
// import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Home } from './Home';

// // Basic Test with React-test-renderer
// it('renders correctly react-test-renderer', () => {
//     const renderer = new ShallowRenderer();
//     renderer.render(<Home />);
//     const result = renderer.getRenderOutput();

//     expect(result).toMatchSnapshot();
// });

it('renders correctly enzyme', () => {
    const wrapper = shallow(<Home />);

    expect(toJson(wrapper)).toMatchSnapshot();
});
