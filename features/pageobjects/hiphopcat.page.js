class HipHopCatPage {
  /**
   * define selectors using getter methods
   */
  get pageHeader() {
    return $("//*[@data-stats-id]//header[@class='sc-c-module-title gel-1/1']");
  }

  get sortSelect() {
    return $("//select[@id='sort']");
  }
}

export default new HipHopCatPage();
