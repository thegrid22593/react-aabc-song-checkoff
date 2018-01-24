import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');


class CheckOffFeedback extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="checkoff">
                <h1>Check Off Feedback</h1>
            </section>
        )
    }
}

module.exports = CheckOffFeedback;