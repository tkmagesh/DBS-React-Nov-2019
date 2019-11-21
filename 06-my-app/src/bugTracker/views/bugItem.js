import React, { Component } from 'react';

class BugItem extends Component {
    onBugClick = () => {
        this.props.toggle(this.props.bug);
    }
    render() {
        return (
            <li>
                {this.props.bug.isClosed ?
                    (<span className="bugname closed" onClick={() => this.onBugClick()}>
                        {JSON.stringify(this.props.bug)}
                    </span>) :
                    (<span className="bugname" onClick={() => this.onBugClick()}>
                        {JSON.stringify(this.props.bug)}
                    </span>)
                }
                <div className="datetime">[Created At]</div>
            </li>
        )
    }
}

export default BugItem;