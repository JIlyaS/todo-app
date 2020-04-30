import React from "react";
import { render } from "@testing-library/react";
import AuthForm from "./AuthForm";

test("renders learn react link", () => {
  const { getByText } = render(<AuthForm />);
  const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
