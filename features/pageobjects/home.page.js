import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get homeLogo() {
    return $("(//a[@data-bbc-container='index-home'])[2]");
  }

  get homoLogoTextLocator() {
    return $("(//a[@data-bbc-container='index-home'])[2]/span");
  }

  get viewAllStations() {
    return $(
      "//div[@data-testid='ListenLiveCarousel']/preceding-sibling::div//a[@data-bbc-container='listen_live']"
    );
  }

  get radio1Logo() {
    return $(
      "//div[@data-testid='ListenLiveCarousel']//a[@data-bbc-source='bbc_radio_one']"
    );
  }

  get radio2Logo() {
    return $(
      "//div[@data-testid='ListenLiveCarousel']//a[@data-bbc-source='bbc_radio_two']"
    );
  }

  get acceptButton() {
    return $("#bbccookies-continue-button");
  }

  get categories() {
    return $("//section[@id='categories']");
  }

  get hipHopCat() {
    return $("//a[@data-bbc-result='music-hiphoprnbanddancehall']");
  }

  async acceptCookies() {
    try {
      if (!!(await this.acceptButton.waitForExist({ timeout: 5000 }))) {
        await this.acceptButton.click();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async isHomeLogoDisplayed() {
    return (await this.homeLogo).isDisplayed();
  }
  open() {
    return super.open();
  }
}

export default new HomePage();
