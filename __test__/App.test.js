import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App";

test("renders the App component", () => {
  const { getByText } = render(<App />);
  expect(getByText("Your Text Here")).toBeTruthy();
});
