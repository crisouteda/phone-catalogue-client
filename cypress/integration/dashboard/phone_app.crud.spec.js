/* eslint-disable no-undef */
import {
  SIGN_UP_BUTTON,
  SEND_AUTH_DATA_BUTTON,
  CREATE_PHONE_BUTTON,
  FROM_SIGNUP_TO_SIGNIN_TEXT,
  CREATE_ITEM_BUTTON,
  ERROR_NOT_HTTPS_URL,
  DELETE_ITEM_BUTTON,
  UPDATE_ITEM_BUTTON,
  ENABLE_EDIT_BUTTON,
} from "../../../src/constants";

describe("Phone App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get(".header").contains(SIGN_UP_BUTTON).click();
    cy.get(".register-modal").contains(FROM_SIGNUP_TO_SIGNIN_TEXT).click();
    cy.get(".register-modal").find("input").first().type("cris@cris.cris");
    cy.get(".register-modal").find("input").last().type("1234");
    cy.get(".register-modal").contains(SEND_AUTH_DATA_BUTTON).click();
  });

  it("user can add a phone", () => {
    // create phone
    cy.get(".page").contains(CREATE_PHONE_BUTTON).click();
    cy.get(".create-modal").should("be.visible");
    cy.get(".create-modal").contains(CREATE_ITEM_BUTTON).should("be.disabled");
    cy.get("#name").type("phone name");
    cy.get(".create-modal").contains(CREATE_ITEM_BUTTON).should("be.disabled");
    cy.get("#thumbnailFileName").type("hola");
    cy.get(".create-modal").contains(ERROR_NOT_HTTPS_URL);
    cy.get(".create-modal").contains(CREATE_ITEM_BUTTON).should("be.disabled");
    cy.get("#thumbnailFileName")
      .clear()
      .type("https://github.com/aflorithmic/ms-api-frontend");
    cy.get(".create-modal").contains(CREATE_ITEM_BUTTON).should("be.disabled");
    cy.get(".create-modal").contains(ERROR_NOT_HTTPS_URL).should("not.exist");
    cy.get("#price").type("diners");
    cy.get(".create-modal")
      .contains(CREATE_ITEM_BUTTON)
      .should("not.be.disabled")
      .click();
    // remove phone
    cy.get(".phone-modal").contains(DELETE_ITEM_BUTTON).click();
    cy.get(".phone-modal").should("not.exist");
  });

  it("update item", () => {
    // update phone
    const testText = " test test test";
    cy.get(".phone-card:first").click();
    cy.get(".phone-modal").should("be.visible");
    cy.get(".phone-modal").contains(ENABLE_EDIT_BUTTON).click();
    cy.get("#memory")
      .invoke("val")
      .then((memoryValue) => {
        cy.get("#memory").type(testText);
        cy.get(".phone-modal").contains(UPDATE_ITEM_BUTTON).click();
        cy.get(".phone-modal").contains(`${memoryValue}${testText}`);
        cy.get(".phone-modal").contains(ENABLE_EDIT_BUTTON).click();
        cy.get("#memory").clear().type(memoryValue);
        cy.get(".phone-modal").contains(UPDATE_ITEM_BUTTON).click();
        cy.get(".phone-modal").contains(memoryValue);
      });
  });
});
