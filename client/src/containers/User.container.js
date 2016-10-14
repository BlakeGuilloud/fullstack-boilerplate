import React                  from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions       from '../actions/User.actions';

class Users extends React.Component {

  static propTypes = {
    userActions: React.PropTypes.object,
    users: React.PropTypes.array,
  };

  componentDidMount() {
    this.props.userActions.fetchUsers();
  }

  render() {
    const props = {
      users: this.props.users,
    };

    return (
      <div>{props.users ? props.users.map((user, idx) => {
        return (
          <div key={idx}>
            {user.name}
          </div>
        )
      }) : null}</div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users: users.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(UserActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
