import React from "react";
import App from "./App";
import Cost from "./components/cost";
import Count from "./components/count";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Icon from "@material-ui/core/Icon";
import { TextField, Typography } from "@material-ui/core";
import Enzyme, { shallow, render as banana, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});

describe("<Cost />", () => {
  it("renders title and cost", () => {
    const { getByText } = render(<Cost title={"test"} cost={10} />);

    const text = getByText(/test/i);
    const num = getByText(/10/);

    expect(text).toBeInTheDocument();
    expect(num).toBeInTheDocument();
  });
});

describe("<Count />", () => {
  let wrapper;
  beforeEach(() => {
    const addToCount = jest.fn();
    wrapper = mount(<Count count={4} addToCount={addToCount} />);
  });

  it("should render a <TextField /> ", () => {
    expect(wrapper.find(Typography)).toHaveLength(1);
  });

  it("should render two <Icon /> ", () => {
    expect(wrapper.find(Icon)).toHaveLength(2);
  });

  it("should render add unit was clicked ", () => {
    const addToCount = jest.fn();
    wrapper = mount(<Count count={4} addToCount={addToCount} />);
    wrapper
      .find("#addSubtract")
      .first()
      .simulate("click");
    expect(addToCount).toHaveBeenCalledTimes(1);
  });

  it("should render subtract unit was clicked ", () => {
    const subtractFromCount = jest.fn();
    wrapper = mount(<Count count={4} subtractFromCount={subtractFromCount} />);
    wrapper
      .find("#subtract")
      .first()
      .simulate("click");
    expect(subtractFromCount).toHaveBeenCalledTimes(1);
  });
});
