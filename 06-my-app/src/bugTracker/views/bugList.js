import React from 'react';
import BugItem from './bugItem';

let BugList = ({ bugs, toggle, removeClosed }) => {
    const bugItems = bugs.map((bug, index) => (
        <BugItem bug={bug} key={index} toggle={toggle} />
    ))
    return (
        <section className="list">
            <ol>
                {bugItems}
            </ol>
            <input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)} />
        </section>
    );
};

export default BugList;