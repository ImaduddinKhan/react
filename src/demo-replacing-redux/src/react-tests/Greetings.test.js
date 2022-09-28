import { fireEvent, render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

// Grouping multiple tests to make test suites

describe("Greetings Component", () => {
  test("renders generel text like hello world", () => {
    // Here are the three A's -> Arrange, Act and Assert
    // Arrange
    render(<Greetings />);

    // Act -> could be button actions or more
    // ... which we have nothing about right now

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders the para if button is not clicked", () => {
    render(<Greetings />);
    const button = screen.getByRole("button");

    fireEvent.blur(button);
    //OR
    // userEvent.click(button);

    //Assert
    expect(screen.getByText("This is good to see you.")).toBeInTheDocument();
  });

  test("renders the para if button clicked", () => {
    //Arrange
    render(<Greetings />);

    //Act
    const button = screen.getByRole("button");

    fireEvent.click(button);
    //OR
    // userEvent.click(button);

    //Assert
    expect(
      screen.queryByText("This is good to see you.")
    ).not.toBeInTheDocument();
  });
});
