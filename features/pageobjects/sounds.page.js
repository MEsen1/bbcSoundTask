import Page from "./page.js";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class SoundsPage extends Page {
  /**
   * define selectors using getter methods
   */
  get categorySection() {
    return $("//section[@data-stats-id='music_page_music_categories']");
  }

  get categoriesList() {
    return $$(
      "//section[@data-stats-id='music_page_music_categories']//a[@data-bbc-content-label='category-list']"
    );
  }

  get header() {
    return $("//div[@data-stats-id='music_hero']//h2");
  }

  get backToBackSound() {
    return $("//li[@data-item-id='music_page_curations_1']");
  }

  get backToBackSoundSection() {
    return $("//section[@aria-labelledby='sc-id-back-to-back-sounds']");
  }

  get playButton() {
    return $("//a[@data-bbc-event-type='play']");
  }

  get soundTrackList() {
    return $("//div[@data-stats-id='container_list']");
  }

  open() {
    return super.open("music");
  }
}

export default new SoundsPage();
