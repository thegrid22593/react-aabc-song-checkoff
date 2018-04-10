import firebase from "firebase";
import React, { Component } from "react";
import UserDashboardSummaryPartCard from "./UserDashboardSummaryPartCard";
import "../../scss/style.scss";

class UserDashboardSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    const users = [];
    firebase
      .firestore()
      .collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(user => {
          users.push(user.data());
        });
        this.setState({ users });
      });
  }

  render() {
    return (
      <div className="dashboard-member-part-tables">
        <div className="dashboard-member-part-table">
          <UserDashboardSummaryPartCard
            singingPart="First Tenor"
            partName="First Tenors"
            users={this.state.users}
          />
          <UserDashboardSummaryPartCard
            singingPart="Second Tenor"
            partName="Second Tenors"
            users={this.state.users}
          />
          <UserDashboardSummaryPartCard
            singingPart="Baritone"
            partName="Baritones"
            users={this.state.users}
          />
          <UserDashboardSummaryPartCard
            singingPart="Bass"
            partName="Basses"
            users={this.state.users}
          />
        </div>
      </div>
    );
  }
}

module.exports = UserDashboardSummary;
