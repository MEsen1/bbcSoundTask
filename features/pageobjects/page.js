import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  open(page = "") {
    return browser.url(`https://www.bbc.co.uk/sounds/${page}`);
  }
}
