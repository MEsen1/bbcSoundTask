import { Given, When, Then } from "@wdio/cucumber-framework";

import HomePage from "../pageobjects/home.page.js";
import BrowserUtils from "../utils/browserUtils.js";
import HipHop from "../pageobjects/hiphop.page.js";
import HipHopCatPage from "../pageobjects/hiphopcat.page.js";
import StationsPage from "../pageobjects/stations.page.js";

import { expect } from "chai";

const pages = {
  home: HomePage,
};

Given("that I am on the BBC Sounds Homepage", async () => {
  await pages.home.open();
  await HomePage.acceptCookies();
});

When("I select the {string} logo", async (string) => {
  expect(await HomePage.isHomeLogoDisplayed()).to.be.equal(
    true,
    "Failed to land on home page"
  );
  const homeLogoText = await BrowserUtils.getElementText(
    await HomePage.homoLogoTextLocator
  );
  expect(String(homeLogoText)).to.equal(
    string,
    "Home logo is failed to display"
  );
  await HomePage.homeLogo.click();
});

Then("I am on the Sounds Homepage", async () => {
  expect(await browser.getUrl()).to.equal(
    "https://www.bbc.co.uk/sounds",
    "Not on the sounds homepage"
  );
});

Then("I can see the Radio 1 logo", async () => {
  await BrowserUtils.scroll(await HomePage.radio1Logo);
  expect(await HomePage.radio1Logo.isDisplayed()).to.be.equal(
    true,
    "Radio 1 logo failed to display"
  );
});

Then("I can see the Radio 2 logo", async () => {
  await BrowserUtils.scroll(await HomePage.radio2Logo);
  expect(await HomePage.radio2Logo.isDisplayed()).to.be.equal(
    true,
    "Radio 2 logo failed to display"
  );
});

When("I select Hip Hop, RnB & Dancehall Category", async () => {
  await BrowserUtils.scroll(await HomePage.categories);
  expect(await HomePage.categories.isDisplayed()).to.be.equal(
    true,
    "Categories are failed to displayed"
  );

  await BrowserUtils.scroll(await HomePage.hipHopCat);
  expect(await HomePage.hipHopCat.isDisplayedInViewport()).to.be.equal(
    true,
    "Hiphop category is failed to show"
  );
  await HomePage.hipHopCat.click();
  await BrowserUtils.waitUntilPageLoaded();
});

Then("I am on {string} Category page", async (string) => {
  await BrowserUtils.waitForElementToBeDisplayed(await HipHop.hipHopViewButton);
  expect(await browser.getTitle()).to.include(
    string,
    "Not on the categories page"
  );
  await BrowserUtils.scroll(await HipHop.allViewButton);
  await HipHop.allViewButton.click();

  await BrowserUtils.waitForElementToBeDisplayed(
    await HipHopCatPage.pageHeader
  );
});

Then("I see the Category page is sorted by popular", async () => {
  expect(await HipHopCatPage.sortSelect.isDisplayed()).to.be.equal(
    true,
    "Failed to display selection"
  );
  const selectVal = await BrowserUtils.getElementValue(
    await HipHopCatPage.sortSelect
  );

  expect(String(selectVal).toLowerCase()).to.equal("popular");
});

When("I click the {string} link", async (string) => {
  await BrowserUtils.waitForElementToBeDisplayed(
    await HomePage.viewAllStations
  );
  expect(await BrowserUtils.getAllVisibleTexT()).to.include(
    string,
    "Failed to show view all stations tag"
  );
  await HomePage.viewAllStations.click();
});

Then("I am on the {string} page", async (string) => {
  expect(await StationsPage.pageHeader.isDisplayed()).to.be.equal(
    true,
    "Not on the stations page"
  );
  expect(await StationsPage.stationsSection.isExisting()).to.be.equal(
    true,
    "Failed to show stations on stations page"
  );
  const stationsHeaderText = await BrowserUtils.getElementText(
    await StationsPage.pageHeader
  );
  expect(String(stationsHeaderText)).to.equal(
    string,
    "Not on the stations page"
  );
});

Then("I see {int} network station logos", async (int) => {
  expect(await StationsPage.stationLogos.length).to.equal(
    int,
    "Failed to show all stations"
  );
});
