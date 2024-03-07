// App.test.jsx
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import Landing from "../src/views/Landing";
import Login from "../src/views/Login";

describe("App", () => {
  it('testing Landing component "', async () => {
    render(Landing ());
    const txt = screen.getByText("SYNDEX");
    expect(txt).toBeVisible()
  });
});
