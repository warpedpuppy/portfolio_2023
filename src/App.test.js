import { describe, it, expect } from "vitest";
import App from "./App";

// Smoke test: the app module should import and expose a component.
// (The original CRA default test asserted a "learn react" link that this
// site never had, so it is replaced with a basic import check.)
describe("App", () => {
  it("exports a component", () => {
    expect(typeof App).toBe("function");
  });
});
