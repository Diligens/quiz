import React from 'react';
import './Quiz.css';
import './bootstrap.min.css';

function Hero() {
    return(
        <div className="jumbotron col-10 offset-1">
            <h1>Quiz</h1>
            <p>Select the book writter by the author shown</p>
        </div>
    )
}

function Book({title}) {
    return (
        <div className="answer">
            <h4>{title}</h4>
        </div>
    )
}

function Turn({author, books}) {
    return(
        <div className="row turn" style={{backgroundColor: "white"}}>
            <div className="col-4 offset-1">
                <img src={author.imageUrl} className="authorimage" alt="Author"/>
            </div>
            <div className="col-6">
                {books.map((title) => <Book title={title} key={title}/>)}
            </div>
        </div>
    )
}

function Continue() {
    return(
        <div>
            
        </div>
    )
}

function Footer() {
    return(
        <footer id="footer" className="row">
           Footer
        </footer>
    )
}

function Quiz({turnData}) {
  return (
    <div className="container-fluid">
        <Hero/>
        <Turn {...turnData}/>
        <Continue/>
        <Footer/>
    </div> 
  );
}

export default Quiz;
