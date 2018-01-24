import React from 'react';
import ReactDOM from 'react-dom';
require('../../scss/style.scss');
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CheckOffSong from './CheckOffSong';
import CheckOffMembers from './CheckOffMembers';
import CheckOffFeedback from './CheckOffFeedback';
import CheckOffPartLeaderProfile from './CheckOffPartLeaderProfile';
import { getAllMembersByPartName } from '../../actions/userActions';


class CheckOffPage extends React.Component {
    constructor(props) {
        super(props);
        console.log('checkoff page', props);
    }

    componentWillMount() {
        let userSingingPart = this.props.user.user.singingPart;
        this.props.dispatch(getAllMembersByPartName(userSingingPart));
    }
    

    render() {
        return(
            <section className="checkoff">
                <h1>Checkoff</h1>
                <CheckOffPartLeaderProfile user={this.props.user}/>
                <CheckOffMembers members={this.props.user.partMembers}/>
            </section>
        )
    }
}

CheckOffPage = withRouter(connect((store) => {
    return {
        user: store.user,
    };
  })(CheckOffPage));

module.exports = CheckOffPage;