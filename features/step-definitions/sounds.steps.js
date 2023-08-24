import { Given, When, Then } from "@wdio/cucumber-framework";

import HomePage from "../pageobjects/home.page.js";
import SoundsPage from "../pageobjects/sounds.page.js";
import SoundsPlayPage from "../pageobjects/soundsPlay.page.js";
import BrowserUtils from "../utils/browserUtils.js";

import { expect } from "chai";

const pages = {
  sounds: SoundsPage,
};

Given("that I am on the BBC Sounds Music page", async () => {
  await pages.sounds.open();
  await HomePage.acceptCookies();
  expect(await BrowserUtils.getElementText(SoundsPage.header)).to.be.equal(
    "Music",
    "Not on the music page"
  );
});

When("I scroll down to the categories section", async () => {
  await BrowserUtils.scroll(await SoundsPage.categorySection);
  expect(await SoundsPage.categoriesList[1].isDisplayed()).to.be.equal(
    true,
    "Categories failed to show"
  );
});

Then("I should see exactly {int} categories", async (int) => {
  expect(await SoundsPage.categoriesList.length).to.equal(
    int,
    "Missing categories"
  );
});

When("I select a sound from back to back list", async () => {
  await BrowserUtils.waitForElementToBeDisplayed(
    await SoundsPage.backToBackSoundSection
  );
  expect(await SoundsPage.backToBackSound.isDisplayed()).to.be.equal(
    true,
    "Back to back sounds failed to show"
  );
  await SoundsPage.backToBackSound.click();
});

Then("I click on the play all button", async () => {
  expect(await SoundsPage.soundTrackList.isDisplayed()).to.be.equal(
    true,
    "Sound track list failed to show"
  );
  await BrowserUtils.waitForElementToBeDisplayed(await SoundsPage.playButton);
  await SoundsPage.playButton.click();
});

Then("I should be able to see the track list", async () => {
  await BrowserUtils.waitForElementToBeDisplayed(
    await SoundsPlayPage.playPauseButton
  );
  await BrowserUtils.scroll(await SoundsPlayPage.trackList);
  expect(await SoundsPlayPage.trackList.isDisplayed()).to.be.equal(
    true,
    "Tracklist failed to show"
  );
});

Then("Click on play button", async () => {
  expect(await SoundsPlayPage.playPauseButton.isClickable()).to.be.equal(
    true,
    "Failed to click play button"
  );
  await SoundsPlayPage.playPauseButton.click();
});

Then("Sign in page should be displayed", async () => {
  await BrowserUtils.waitUntilPageLoaded();
  expect(await SoundsPlayPage.registerButton.isDisplayed()).to.be.equal(
    true,
    "Register button failed to show"
  );
  expect(await SoundsPlayPage.signinButton.isDisplayed()).to.be.equal(
    true,
    "Failed to show sign in button"
  );
});
