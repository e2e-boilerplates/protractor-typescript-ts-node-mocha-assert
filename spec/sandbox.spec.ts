import * as assert from "assert";
import { before } from "mocha";
import { browser, by, element } from "protractor";

describe("Sandbox", () => {
  before(() => {
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = element(by.css("h1"));

    assert.strictEqual(title, "Sandbox");
    assert.strictEqual(await header.getText(), "Sandbox");
  });
});
