Feature: View Board
    In order to have visibility of an Open Space board
    As an attendee
    I want to be able to see the sessions.

Scenario: ALE sessions
    Given the sessions from ALE2011
    When I look at the board
    # Force us to first make the site run
    Then the page title should be "OpenSpaceInvaders"
    And the page headline should be "Open Space Invaders"
    # Note these are temporary until I can locate the real sessions to use
    And I should be able to see the following slots for "Wednesday"
        | space_name  | time  | session         | proposer  |
        | Pink        | 15:00 | Something       | Jo        |
        | Pink        | 16:00 | Something else  | Liz       |
        | Black       | 15:00 | Another session | Marcin    |
        | Black       | 16:00 | Last one        | Barry     |