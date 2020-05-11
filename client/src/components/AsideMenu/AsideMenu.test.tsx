import React from "react";
import { render } from "@testing-library/react";
import AsideMenu from "./AsideMenu";

test("renders learn react link", () => {
  const { getByText } = render(<AsideMenu />);
  const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
