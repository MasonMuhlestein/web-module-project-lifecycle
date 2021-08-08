import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    user: [],
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/MasonMuhlestein")
      .then((res) => {
        console.log(res.data);
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.github.com/users/MasonMuhlestein/followers")
      .then((res) => {
        console.log(res.data);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (e) => {
    this.setState({
      user: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      console.log("previous props");
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <div className="userContainer">
          <h1>Userame: {this.state.user.name}</h1>
          <div className="imageContainer">
            <img src={this.state.user.avatar_url} />
          </div>
          <h4>Username: {this.state.user.login}</h4>
          <h4>Bio: {this.state.user.bio}</h4>
          <h4>Location: {this.state.user.location}</h4>
        </div>
        <div className="followerContainer">
          <h1>Who I Follow</h1>
          {this.state.followers.map((follower) => {
            return <h2>{follower.login}</h2>;
          })}
        </div>
      </div>
    );
  }
}

export default App;