Feature: Navigating to BBC Sounds Pages

  As a user
  I WANT to navigate to the Sounds page
  So THAT I can see and access all logos and content in one place

  Background:
    Given that I am on the BBC Sounds Homepage

  
  Scenario: Radio 1 and Radio 2 logos are displayed in the Listen Live
   module on the Sounds Homepage
    When I select the 'Home' logo
    Then I am on the Sounds Homepage
    * I can see the Radio 1 logo
    * I can see the Radio 2 logo
  
  Scenario: Selecting the Hip Hop category from the Categories module
   on the Sounds Homepage
    When I select Hip Hop, RnB & Dancehall Category
    Then I am on 'Hip Hop, RnB & Dancehall' Category page
    * I see the Category page is sorted by popular 

  
  Scenario: Verify network station logos are displayed on the Stations
   page
    When I click the 'View all Stations & Schedules' link
    Then I am on the 'Stations' page
    * I see 26 network station logos 
