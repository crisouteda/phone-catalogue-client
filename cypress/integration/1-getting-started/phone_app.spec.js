/* eslint-disable no-undef */
import { HeaderTitle, ItemsDisplayed } from "../../../src/constants";

describe("Phone App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", () => {
    cy.contains(HeaderTitle);
  });

  it(`${ItemsDisplayed} loading cards being rendered`, () => {
    cy.get(".loading-card").should("have.length", ItemsDisplayed);
  });

  it(`${ItemsDisplayed} phone cards being rendered`, () => {
    cy.get(".phone-card").should("have.length", ItemsDisplayed);
  });

  it("phone modal opens", () => {
    cy.get(".phone-card:first").click();
    cy.get(".phone-modal");
  });
});
