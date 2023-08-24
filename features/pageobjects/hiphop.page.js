class HipHop {
  /**
   * define selectors using getter methods
   */
  get hipHopViewButton() {
    return $(
      "//a[@data-bbc-result='container_list_music-hiphoprnbanddancehall-hiphop']"
    );
  }

  get allViewButton() {
    return $(
      "//a[@data-bbc-result='container_list_all_music-hiphoprnbanddancehall']"
    );
  }
}

export default new HipHop();
