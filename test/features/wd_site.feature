@all
Feature: Western Digital smoke

  Background:
    Given I open "Home" page

  @smoke
  Scenario: Home page should be opened
    Then Page title should be "Western Digital Store"

  @search
  Scenario: Positive: Search should provide results
    When I click "Search Button"
    When I search "Flash"
    Then I get search result

  @plp
  Scenario: Products list page should be sorted by Title Z-A
    When I select all brands products
    When I choose Sort by Title desc
    Then Product list should be sorted
