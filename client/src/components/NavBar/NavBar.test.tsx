import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test("renders learn react link", () => {
  const { getByText } = render(<NavBar />);
  const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});