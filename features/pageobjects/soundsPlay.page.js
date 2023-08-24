class SoundsPlayPage {
  get playPauseButton() {
    return $("//button[@id='p_audioui_playpause']");
  }

  get trackList() {
    return $("//section[@aria-labelledby='sc-id-tracklist']");
  }

  get signinButton() {
    return $("//a[@class='id-cta-button']");
  }

  get registerButton() {
    return $("//a[@class='id-cta-link']");
  }

  get signInPopUp() {
    return $("//div[@id='msi-modal-overlay']");
  }
}

export default new SoundsPlayPage();
