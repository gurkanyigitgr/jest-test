import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, act } from "@testing-library/react";

let num1input,
  num2input,
  addButton,
  subtractButton,
  multiplyButton,
  divideButton,
  resultArea;

describe("Calculator", () => {
  beforeEach(() => {
    render(<Home />);
    num1input = screen.getByTestId("num1");
    num2input = screen.getByTestId("num2");
    addButton = screen.getByTestId("add");
    subtractButton = screen.getByTestId("subtract");
    multiplyButton = screen.getByTestId("multiply");
    divideButton = screen.getByTestId("divide");
    resultArea = screen.getByTestId("result");
  });
  it("renders a calculator", () => {
    expect(resultArea).toBeInTheDocument();
    expect(num1input).toBeInTheDocument();
    expect(num2input).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(subtractButton).toBeInTheDocument();
    expect(multiplyButton).toBeInTheDocument();
    expect(divideButton).toBeInTheDocument();
    expect(resultArea).toBeInTheDocument();
  });
  it("adds numbers", () => {
    act(() => {
      fireEvent.change(num1input, { target: { value: 5 } });
      fireEvent.change(num2input, { target: { value: 8 } });
      addButton.click();
    });
    expect(resultArea).toHaveTextContent("13");
  });
  it("subtract numbers", () => {
    act(() => {
      fireEvent.change(num1input, { target: { value: 10 } });
      fireEvent.change(num2input, { target: { value: 8 } });
      subtractButton.click();
    });
    expect(resultArea).toHaveTextContent("2");
  });
  it("multiply numbers", () => {
    act(() => {
      fireEvent.change(num1input, { target: { value: 5 } });
      fireEvent.change(num2input, { target: { value: 8 } });
      multiplyButton.click();
    });
    expect(resultArea).toHaveTextContent("40");
  });
  it("divide numbers", () => {
    act(() => {
      fireEvent.change(num1input, { target: { value: 10 } });
      fireEvent.change(num2input, { target: { value: 5 } });
      divideButton.click();
    });
    expect(resultArea).toHaveTextContent("2");
  });
});
