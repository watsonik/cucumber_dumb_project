@all
Feature: Western Digital smoke

  @smoke
  Scenario: Home page should be opened
    Given I open "Home" page
    Then Page title should be "Western Digital Store"

  @search
  Scenario: Positive: Search should provide results
    Given I open "Home" page
    When I click "Search Button"
    When I search "Flash"
    Then I get search result

  @plp
  Scenario: Products list page should be sorted by Title Z-A
    Given I open "Home" page
    When I select all brands products
    When I choose Sort by Title desc
    Then Product list should be sorted
