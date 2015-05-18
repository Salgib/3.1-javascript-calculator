When I click on a number...
Given that I have not pressed the decimal,
Then that number should appear on the display.

Given that I have pressed the decimal,
Then that number should be concatenated on the
end of the currently displayed number.

Given I have a pending operator should operate on the
displaed number and the number just pressed
and the number just pressed should be displayed.


When I click on an arithmetic operator...
Then it should queue the indicated operation
to operate on the number that is displayed and the
number about to be clicked.
And it displays any queued calculation.




When I click on clear.....
Then queued operations and calculations are cleared.
And the display is reset to 0.





When I click on equal...
The queued operations are calculated.
And the display is set to the calculation.
