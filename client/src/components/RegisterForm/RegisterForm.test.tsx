import React from "react";
import { render } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

test("renders learn react link", () => {
  const { getByText } = render(<RegisterForm />);
  const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
