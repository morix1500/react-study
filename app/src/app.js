import React from 'react';
import { connect } from "react-redux";
import { load } from "./user";

@connect(
  state => ({
    users: state.user.users
  }),
  { load }
)

export default class App extends React.Component {
  componentWillMount() {
    this.props.load()
  }

  render() {
    const { users } = this.props
    return (
      <div>
        {users && users.map((user) => {
          return (
            <div key={user.email}>
              <img src={user.picture.thumbnail} />
              <p>名前: {user.name.first + ' ' + user.name.last}</p>
              <p>性別: {user.gender}</p>
              <p>email: {user.email}</p>
            </div>
          )
        })}
      </div>
    )
  }
}