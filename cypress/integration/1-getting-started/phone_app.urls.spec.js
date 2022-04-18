/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable no-undef */

import { SIGN_UP_BUTTON } from "../../../src/constants";

describe("Phone App - URLS", () => {
  it("phone modal opens adds id to url", () => {
    cy.visit("http://localhost:3000");
    let phoneId;
    cy.get(".phone-card:first").click();
    cy.get(".phone-modal").should("be.visible");
    cy.get(".phone-modal-content")
      .invoke("data", "id")
      .then((dataId) => {
        phoneId = dataId;
      });
    if (phoneId) {
      cy.location().should((loc) => {
        expect(loc.search).to.eq(`?id=${this.dataId}`);
      });
    }
    cy.get(".close-button").click();
    cy.get(".phone-modal").should("not.exist");
    cy.location().should((loc) => {
      expect(loc.search).to.eq("");
    });
  });

  it("register modal opens adds register=true to url", () => {
    cy.visit("http://localhost:3000");
    cy.get(".header").contains(SIGN_UP_BUTTON).click();
    cy.get(".register-modal").should("be.visible");
    cy.location().should((loc) => {
      expect(loc.search).to.eq(`?register=true`);
    });
    cy.get(".close-button").click();
    cy.get(".register-modal").should("not.exist");
    cy.location().should((loc) => {
      expect(loc.search).to.eq("");
    });
  });

  it("register modal opens when page opened with query params register=true", () => {
    cy.visit("http://localhost:3000/?register=true");
    cy.get(".register-modal").should("be.visible");
    cy.get(".close-button").click();
    cy.location().should((loc) => {
      expect(loc.search).to.eq("");
    });
  });

  it("register modal opens when page opened with query params id", () => {
    cy.visit("http://localhost:3000/?id=6607ca3a-1471-4c08-8210-0a527505aadc");
    cy.get(".phone-modal").should("be.visible");
    cy.get(".close-button").click();
    cy.location().should((loc) => {
      expect(loc.search).to.eq("");
    });
  });
});
