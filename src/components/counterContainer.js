import React, { Component } from "react";
import Count from "./count";
import Cost from "./cost";

import { styles } from "./styles/containerStyles";
import { withStyles } from "@material-ui/core";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4,
      totalCost: 0,
      costPerUnit: (175.5).toFixed(2)
    };
  }

  componentDidMount() {
    this.updateTotalCost();
  }

  checkCount = () => {
    return /^[0-9]+$/i.test(this.state.count);
  };

  updateTotalCost = () => {
    const { count, costPerUnit } = this.state;

    if (!this.checkCount() && count !== "") {
      window.alert("# of Units must be an Integer");
      this.setState({
        count: 1
      });
    } else if (count % 2 === 0) {
      this.setState({ totalCost: count * costPerUnit });
    } else {
      this.setState({
        totalCost: (count * costPerUnit).toFixed(2)
      });
    }
  };

  addToCount = () => {
    if (this.state.count === "0" || this.state.count === "") {
      this.setState({
        count: 1
      });
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  subtractFromCount = () => {
    if (this.state.count > 1) {
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
    const { classes } = this.props;
    return (
      <div className={classes.totalContainer}>
        <div className={classes.grid}>
          <div className={classes.costPer}>
            <Cost title={"COST PER UNIT"} cost={costPerUnit} />
          </div>
          <div>
            <Count
              count={count}
              changeHandler={this.changeHandler}
              subtractFromCount={this.subtractFromCount}
              addToCount={this.addToCount}
            />
          </div>
          <div className={classes.totalCost}>
            <Cost title={"TOTAL COST"} cost={totalCost} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CounterContainer);
