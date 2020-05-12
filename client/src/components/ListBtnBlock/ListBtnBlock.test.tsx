import React from "react";
import { render } from "@testing-library/react";
import ListBtnBlock from "./ListBtnBlock";

test("renders learn react link", () => {
  const { getByText } = render(<ListBtnBlock />);
  const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});