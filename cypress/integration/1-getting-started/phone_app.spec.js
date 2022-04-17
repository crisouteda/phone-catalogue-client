/* eslint-disable no-undef */
import { HEADER_TITLE, ITEMS_DISPLAYED } from "../../../src/constants";

describe("Phone App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", () => {
    cy.contains(HEADER_TITLE);
  });

  it(`${ItemsDisplayed} loading cards being rendered`, () => {
    cy.get(".loading-card").should("have.length", ITEMS_DISPLAYED);
  });

  it(`${ItemsDisplayed} phone cards being rendered`, () => {
    cy.get(".phone-card").should("have.length", ITEMS_DISPLAYED);
  });

  it("phone modal opens", () => {
    cy.get(".phone-card:first").click();
    cy.get(".phone-modal");
  });
});
