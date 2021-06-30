import React, { Component } from "react";

export default class Contact extends Component {
  state = { data: [] };
  componentDidMount() {
    const fetchURL = "http://localhost:5000/";

    fetch(`${fetchURL}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("helloookfjikfjsojfs");
        }
      })
      .then((data2) => {
        console.log(data2);
        this.setState({ data: data2 });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <ul>
        {this.state.data.map((e) => {
          return <li> {e.name}</li>;
        })}
      </ul>
    );
  }
}
