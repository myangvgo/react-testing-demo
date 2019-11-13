import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Examining the syntax of Jest tests', () => {
    it('sums numbers', () => {
        expect(1 + 2).toEqual(3);
        expect(2 + 2).toEqual(4);
    });
});

describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders welcome message', () => {
        const wrapper = shallow(<App />);
        const welcome = <h1>Welcome to React Testing</h1>;
        // expect(wrapper.contains(welcome)).toBe(true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
