import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {


  render(<App />)
  const name = screen.getByLabelText(/name:/i)
  const email = screen.getByLabelText(/email:/i)

  expect(name).toBeInTheDocument()
  expect(email).toBeInTheDocument()
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here

  render(<App />)

  const firstInterestBox = screen.getByRole("checkbox", { name: /interest one/i})
  const secondInterestBox = screen.getByRole("checkbox", { name: /interest two/i})
  const thirdInterestBox = screen.getByRole("checkbox", { name: /interest three/i})

  expect(firstInterestBox).toBeInTheDocument()
  expect(secondInterestBox).toBeInTheDocument()
  expect(thirdInterestBox).toBeInTheDocument()
});

test("the checkboxes are initially unchecked", () => {
  // your test code here

  render(<App />)
  
  const firstInterestBox = screen.getByRole("checkbox", { name: /interest one/i})
  const secondInterestBox = screen.getByRole("checkbox", { name: /interest two/i})
  const thirdInterestBox = screen.getByRole("checkbox", { name: /interest three/i})

  expect(firstInterestBox).not.toBeChecked()
  expect(secondInterestBox).not.toBeChecked()
  expect(thirdInterestBox).not.toBeChecked()
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  
  render(<App />)

  const name = screen.getByLabelText(/name:/i)
  const email = screen.getByLabelText(/email:/i)

  userEvent.type(name, "John Doe")
  userEvent.type(email, "randomemail@email.com")

  expect(name).toHaveDisplayValue("John Doe")
  expect(email).toHaveDisplayValue("randomemail@email.com")
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here


  render(<App />)
  const firstInterestBox = screen.getByRole("checkbox", { name: /interest one/i})
  const secondInterestBox = screen.getByRole("checkbox", { name: /interest two/i})
  const thirdInterestBox = screen.getByRole("checkbox", { name: /interest three/i})

  userEvent.click(firstInterestBox)
  userEvent.click(secondInterestBox)
  userEvent.click(thirdInterestBox)


  expect(firstInterestBox).toBeChecked()
  expect(secondInterestBox).toBeChecked()
  expect(thirdInterestBox).toBeChecked()
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App />)

  const button = screen.getByRole("button", { name: /submit/i})

  userEvent.click(button)
  const message = screen.getByText(/your form has been submitted!/i)
  expect(message).toBeInTheDocument()
});