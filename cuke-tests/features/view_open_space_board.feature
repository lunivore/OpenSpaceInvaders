Feature: View Board
    In order to have visibility of an Open Space board
    As an attendee
    I want to be able to see the sessions.

Scenario: ALE sessions
    Given the sessions from ALE2011
    When I look at the board
    # Force us to first make the site run
    Then the page title should be "OpenSpaceInvaders"
    #And the page headline should be "Sparkspace"
    #And I should be able to see the following sessions
    #    | Title | Proposer | Slot |
    #    | Random session | Jo | Pink |

    #Session slots have a space and a time.
    #Spaces have names