import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Cleaning up after each test
afterEach(() => {
  cleanup();
});
