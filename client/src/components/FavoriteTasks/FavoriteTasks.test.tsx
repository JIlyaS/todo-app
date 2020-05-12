import React from "react";
import { render } from "@testing-library/react";
import FavoriteTasks from "./FavoriteTasks";

test("renders learn react link", () => {
  const { getByText } = render(<FavoriteTasks />);
  const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});