import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
    // tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrment = product => {
    console.log(product);
    this.setState({ count: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrment({})}
          className="btn btn-secondery btn-sm"
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>THere is no tags!</p>;
    return (
      <ul>
        <li>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </li>
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
