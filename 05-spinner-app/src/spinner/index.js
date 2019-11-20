import React, { Component } from 'react';

class Spinner extends Component {
    state = { delta: 0 };
    render() {
        let { delta } = this.state,
            { value, increment, decrement } = this.props;
        return (
            <div>
                <h1>Spinner</h1>
                <hr />
                <label>Delta :</label>
                <input type="number" onChange={evt => this.setState({ delta: evt.target.valueAsNumber })} />
                <br />
                <input type="button" value="Decrement" onClick={() => decrement(delta)} />
                <span> [ {value} ] </span>
                <input type="button" value="Increment" onClick={() => increment(delta)} />
            </div>
        );
    }
}

export default Spinner;