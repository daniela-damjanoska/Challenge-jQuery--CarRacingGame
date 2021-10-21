# Challenge 15 - jQuery - Car Racing Game

For this challenge, you will have to make a mini Car racing game.

On the top of the page, there should be 2 buttons. When you click the first
one ‘Race!’ the game starts. When you click the ‘Start over’ button the game
resets if it’s finished (meaning: the cars go at the starting positions).

The game starts with a countdown, which you will have to create (& is
centered relative to the ‘racetrack’). When the countdown reaches 0, it just
disappears and the cars start to race. The cars must go to the very end of the
‘racetrack’ and stop there (they should not continue outside of the window).
When one of the cars reaches the end, the ‘racetrack’ gets darken and a finish
flag appears with an animation on top of the ‘racetrack’.

Also, while the race is in progress, the buttons on top should be disabled and
you cannot click on any of the buttons until the race finishes. When the race
is over, they can be clickable again.

The bottom section of the page, below the ‘racetrack’, should display results
for every race.

On the left side, the results must be placed in a table with the correct timing
(in milliseconds) and the correct place a car has achieved in the given race.
On every new race, new results should be inserted in a new row.

The right side of the page should be empty at first (if you start the game for
the very first time) and nothing should show up there. When you play the
game at least 1 time, and you refresh the page, the bottom right side of the
page should show up the: ‘Results from the previous time you played this
game:’, also in a table. These results should be correct as well (obviously) and
should show up the results of the last game that you played before refreshing
the page.
