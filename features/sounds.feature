Feature: Navigating to BBC Sounds Music Page

  As a user
  I WANT to navigate to the Sounds music page
  So THAT I can access various music content in one place

# Automated scenarios for a guest user

Background:
  Given that I am on the BBC Sounds Music page

Scenario: Verifying the number of categories
  
  When I scroll down to the categories section
  Then I should see exactly 15 categories

Scenario: Playing a track
  
  When I select a sound from back to back list
  Then I click on the play all button
  * I should be able to see the track list
  * Click on play button
#   Then the track should start playing # if user already signed in
  Then Sign in page should be displayed

# Logged in user scenarios not automated

# Scenario: Logging into a user account
  
#   When I click on the 'Sign in' button
#   And I enter my credentials
#   And I click on the submit button
#   Then I should be logged into my account


# Scenario: Playing a featured track
  
#   When I click on the play button of a featured track
#   Then the track should start playing

# Scenario: Pausing a track that is currently playing
  
#   And a track is currently playing
#   When I click on the pause button of the currently playing track
#   Then the track should pause

