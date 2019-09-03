import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const state = {
    turnData: {
        books: ['The Shining', 'IT', 'David Copperfield', 'A Tale of Two Cities'],
        author: {
            name: 'Charles Dickens',
            imageUrl: 'images/authors/charlesdickens.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['David Cooperfield', 'A Tale of Two Cities']
        },
    },
    highlight: 'none'
}


describe("Quiz", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Quiz {...state} onAnswerSelected={ () => {} }/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    describe("When no answer has been selected", () => {
        let wrapper;
        beforeAll(()=> {
            wrapper = mount(<Quiz {...state} onAnswerSelected={ () => {}}/>)
        })

        it("should have no background color", () => {
            expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
        })
    });

    describe("When the wrong answer has been selected", () => {
        let wrapper;
        beforeAll(()=> {
            wrapper = mount(<Quiz {...(Object.assign({}, state, {highlight: 'wrong'}))} onAnswerSelected={ () => {}}/>)
        })

        it("should have a red background color", () => {
            expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
        })
    });

    describe("When the correct answer has been selected", () => {
        let wrapper;
        beforeAll(()=> {
            wrapper = mount(<Quiz {...(Object.assign({}, state, {highlight: 'correct'}))} onAnswerSelected={ () => {}}/>)
        })

        it("should have a red background color", () => {
            expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
        })
    });

    describe("When the first answer is selected", () => {
        let wrapper;
        const handleAnswerSelected = jest.fn();

        beforeAll(()=> {
            wrapper = mount(<Quiz {...state} onAnswerSelected={ handleAnswerSelected }/>);
            wrapper.find('.answer').first().simulate('click');
        });

        it("onAnswerSelected should be called", () => {
            expect(handleAnswerSelected).toHaveBeenCalled();
        });

        it("should receive The Shining", () => {
            expect(handleAnswerSelected).toHaveBeenCalledWith("The Shining");
        });
    });
})

