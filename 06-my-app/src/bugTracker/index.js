import React, { Component } from 'react';
import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

import * as bugActionCreators from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BugTracker extends Component {
    render() {
        const { bugs, toggle, removeClosed, addNew } = this.props;
        return (<div>
            {/* BugStats */}
            <BugStats bugs={bugs} />
            {/* BugSort */}
            <BugSort />
            {/* BugEdit */}
            <BugEdit addNew={addNew} />
            {/* BugList */}
            <BugList bugs={bugs} toggle={toggle} removeClosed={removeClosed} />
        </div>
        );
    }
}

function mapStateToProps(appState){
    const bugs = appState.bugsState;
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BugTracker);