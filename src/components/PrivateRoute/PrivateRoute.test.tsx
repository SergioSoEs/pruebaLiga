import React from "react";
import { render } from "@testing-library/react";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter } from "react-router-dom";
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("App component", () => {
  const renderApp = () =>
    render(
      <BrowserRouter>
        <PrivateRoute />
      </BrowserRouter>
    );

  test("should render PrivateRoute", async () => {
    renderApp();
    expect(renderApp).toBeTruthy();
  });
});
