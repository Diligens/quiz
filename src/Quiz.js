import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import './bootstrap.min.css';
import PropTypes from 'prop-types/prop-types';

function Hero() {
    return (
        <div className="jumbotron col-10 offset-1">
            <h1>Quiz</h1>
            <p>Select the book writter by the author shown</p>
        </div>
    )
}

function Book({ title, onClick }) {
    return (
        <div className="answer" onClick={() => { onClick(title); }}>
            <h4>{title}</h4>
        </div>
    )
}

function Turn({ author, books, highlight, onAnswerSelected}) {
    function highlightToBgColor(highlight) {
        const mapping = {
            'none': '',
            'correct': 'green',
            'wrong': 'red'
        }
        return mapping[highlight];
    }

    return (
        <div className="row turn" style={{ backgroundColor: highlightToBgColor(highlight) }}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="authorimage" alt="Author" />
            </div>
            <div className="col-6">
                {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}/>)}
            </div>
        </div>
    )
}

Turn.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageSource: PropTypes.string.isRequired,
        // books: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    // books: PropTypes.array(PropTypes.string).isRequired, // errors, I think, need to use another type check tool https://github.com/facebook/prop-types/blob/master/README.md#difference-from-reactproptypes-dont-call-validator-functions
    highlight: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}

function Continue() {
    return (
        <div>

        </div>
    )
}

function Footer() {
    return (
        <footer id="footer" className="row">
            Footer
        </footer>
    )
}

function Quiz({ turnData, highlight, onAnswerSelected}) {
    return (
        <div className="container-fluid">
            <Hero />
            <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
            <Continue />
            <p>
                <Link to="/add">
                    Add an author
                </Link>
            </p>
            <Footer />
        </div>
    );
}

export default Quiz;
