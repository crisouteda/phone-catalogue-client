/* eslint-disable no-undef */
import chaiColors from "chai-colors";
import {
  colors,
  HEADER_TITLE,
  ITEMS_DISPLAYED,
  SIGN_UP_BUTTON,
  SEND_AUTH_DATA_BUTTON,
  LOG_OUT_BUTTON,
  CREATE_PHONE_BUTTON,
  FROM_SIGNUP_TO_SIGNIN_TEXT,
} from "../../../src/constants";

chai.use(chaiColors);

describe("Phone App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", () => {
    cy.contains(HEADER_TITLE);
  });

  it(`${ITEMS_DISPLAYED} loading cards being rendered`, () => {
    cy.get(".loading-card").should("have.length", ITEMS_DISPLAYED);
  });

  it(`${ITEMS_DISPLAYED} phone cards being rendered`, () => {
    cy.get(".phone-card").should("have.length", ITEMS_DISPLAYED);
  });

  it("phone modal opens", () => {
    cy.get(".phone-card:first").click();
    cy.get(".phone-modal").should("be.visible");
  });

  it("theme toggle changes colors", () => {
    cy.get(".page")
      .should("have.css", "background-color")
      .and("be.colored", colors["red light"].bg);
    cy.get("#toggle-theme").click();
    cy.get(".page")
      .should("have.css", "background-color")
      .and("be.colored", colors["red dark"].bg);
  });

  it("user can sing up", () => {
    cy.get(".header").contains(LOG_OUT_BUTTON).should("not.exist");
    cy.get(".page").contains(CREATE_PHONE_BUTTON).should("not.exist");
    cy.get(".header").contains(SIGN_UP_BUTTON).click();
    cy.get(".register-modal").find("input").first().type("cris@cris.cris");
    cy.get(".register-modal").find("input").last().type("1234");
    cy.get(".register-modal").contains(SEND_AUTH_DATA_BUTTON).click();
    cy.get(".header").contains(LOG_OUT_BUTTON).should("be.visible");
    cy.get(".page").contains(CREATE_PHONE_BUTTON).should("be.visible");
  });

  it("user can sing in", () => {
    cy.get(".header").contains(LOG_OUT_BUTTON).should("not.exist");
    cy.get(".page").contains(CREATE_PHONE_BUTTON).should("not.exist");
    cy.get(".header").contains(SIGN_UP_BUTTON).click();
    cy.get(".register-modal").contains(FROM_SIGNUP_TO_SIGNIN_TEXT).click();
    cy.get(".register-modal").find("input").first().type("cris@cris.cris");
    cy.get(".register-modal").find("input").last().type("1234");
    cy.get(".register-modal").contains(SEND_AUTH_DATA_BUTTON).click();
    cy.get(".header").contains(LOG_OUT_BUTTON).should("be.visible");
    cy.get(".page").contains(CREATE_PHONE_BUTTON).should("be.visible");
  });
});
