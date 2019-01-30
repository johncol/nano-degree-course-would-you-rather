import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import IconsCredit from '../icons-credit/IconsCredit';
import LeaderboardTable from './leaderboard-table/LeaderboardTable';
import { UserAction } from '../../state/actions/users';

import './leaderboard.scss';

class Leaderboard extends Component {
  componentDidMount() {
    const { shouldFetchUsers, fetchAllUsers } = this.props;
    if (shouldFetchUsers) {
      fetchAllUsers();
    }
  }

  render() {
    const { users } = this.props;
    return (
      <Fragment>
        <LeaderboardTable users={users} />
        <IconsCredit />
      </Fragment>
    );
  }
}

const stateToProps = state => {
  const users = Object.values(state.users.list)
    .map(user => {
      const questions = user.questions.length;
      const answers = Object.keys(user.answers).length;
      const score = questions + answers;
      return {
        ...user,
        questions,
        answers,
        score
      };
    })
    .sort((user1, user2) => user2.score - user1.score);

  return {
    shouldFetchUsers: !state.users.allUsersRequested,
    users
  };
};

const dispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(UserAction.fetchAllUsers())
});

export default connect(
  stateToProps,
  dispatchToProps
)(Leaderboard);
