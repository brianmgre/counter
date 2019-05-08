import React, { Component } from "react";
import Count from "./count";
import Cost from "./cost";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      totalCost: 0,
      costPerUnit: (175.5).toFixed(2)
    };
  }

  componentDidMount() {
    this.setState({
      count: 4
    });
    this.updateTotalCost();
  }

  updateTotalCost = () => {
    console.log(this.state);
    const { count, costPerUnit } = this.state;

    if (Number(count) !== count || (count * costPerUnit) % 1 !== 0) {
      window.alert("Count must be an Integer");
      this.setState({
        count: 1,
        totalCost: (1 * costPerUnit).toFixed(2)
      });
    } else if ((count * costPerUnit) % 1 === 0) {
      this.setState({ totalCost: count * costPerUnit });
    } else {
      this.setState({
        totalCost: (count * costPerUnit).toFixed(2)
      });
    }
  };

  addToCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  subtractFromCount = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.updateTotalCost();
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { count, totalCost, costPerUnit } = this.state;
    return (
      <div>
        <Cost title={"COST PER UNIT"} cost={costPerUnit} />
        <Count
          count={count}
          changeHandler={this.changeHandler}
          subtractFromCount={this.subtractFromCount}
          addToCount={this.addToCount}
        />
        <Cost title={"TOTAL COST"} cost={totalCost} />
      </div>
    );
  }
}

export default CounterContainer;
