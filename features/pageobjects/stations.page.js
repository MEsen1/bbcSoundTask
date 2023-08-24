class StationsPage {
  /**
   * define selectors using getter methods
   */
  get pageHeader() {
    return $("//h2[@id='sw-id-national_stations']");
  }

  get stationsSection() {
    return $("//section[@aria-labelledby='sw-id-national_stations']");
  }

  get stationLogos() {
    return $$("//a[@data-bbc-container='national_stations']//img");
  }
}

export default new StationsPage();
