# Javascript Whack-A-Mole

### Vanilla JavaScript, CSS, and a couple image assets can make for a pretty fun little game :)🍦 

## Check out the [Live Demo](https://ryellingson.github.io/javascript-whack-a-mole/)!!!

![mole](https://user-images.githubusercontent.com/56618947/154886581-6dd59281-22e1-48b0-8ff9-0f0d497ec34c.gif)

Here we have a little JavaScript game where moles pop out of holes at random intervals, and the player scores points by clicking on the moles when they appear. The game starts by selecting all elements with the class "hole" and "mole" in the HTML document, and then declaring some variables for the score, the last hole that was selected, and whether the game time is up.

The randomTime function generates a random number between a minimum and maximum value, which will be used to determine the time intervals at which the moles appear. The randomHole function takes a NodeList as an argument and randomly selects an element from that list, in this case a hole. If the same hole is selected twice in a row, the function is called again to prevent repetition.

The peep function is responsible for revealing the moles from the holes. It calls the randomTime function to get a random time interval and the randomHole function to select a hole. It then adds the class "up" to the selected hole, which triggers an animation to reveal the mole. The function also sets a timeout so that the mole retreats back into its hole after a certain amount of time, and then calls itself again to continue the game until the time is up.

The startGame function is responsible for resetting the game's score, time, and starting the peep function to begin the game. The bonk function is called when the player successfully clicks on a mole. It increments the score, removes the "up" class from the mole's hole to make it retreat, and updates the score on the score board. The moles are then set to listen for clicks, and when clicked, the bonk function is called.

This code is a well-structured JavaScript game that utilizes various functions and variables to create a fun and interactive game experience. The use of random intervals and hole selection adds an element of unpredictability to the game, making it more challenging for the player. The startGame and bonk functions provide a clear and organized way to handle the game's mechanics such as scorekeeping and mole hiding. Overall, this code is a great example of how JavaScript can be used to create dynamic and engaging web-based games.
