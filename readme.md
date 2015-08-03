##Asteroids
Homage to classic Asteroids game, powered by Javascript and HTML5 Canvas.

Play it live at: http://tbescherer/xyz.Asteroids

##Technologies Used
- Javascript
- HTML
- HTML Canvas
- CSS
- Keymaster.js library

#Technical Challenges
In developing this game, I encountered a few interesting technical challenges.

###Finding the average of two hex colors
In the course of writing Asteroids I decided to implement a feature where a new asteroid resulting from a two asteroid collision would have a color which was the average of the colors of the two parent asteroids.

To accomplish this, I split each hex color string in to three substrings, leaving off the '#' symbol. The three two character substrings are the base 16 ("hex") representation of the red, green, and blue values respectively in the color. I converted these substrings to base 10, averaged the red with the red, the blue with the blue, and you guess it the green with the green. I then converted them back to base 16. Finally I concatenated the resulting RGB strings into a new hex code.

###Rotating a triangle in HTML Canvas
The classic Asteroids game relies on simple geometric imagery which is more evocative than it is realistic. I wanted to replicate the feel of this imagery for my rendition of Asteroids. However, to capture this I needed to implement a rotating triangle for my player's ship. This was somewhat challenging, as drawing on HTML Canvas is a bit like drawing on any canvas-- once you add an element to an image, it becomes part of the underlying image, and can not be easily separated from the background and other elements. To handle this, I used the save and load features of canvas. Rather than rotating my ship individually, I instead saved my canvas, drew the ship, rotated the entire canvas, and then reloaded the originally saved canvas such that all other element returned to their original positions, except for the rotated ship at the center.

###Throttling Fire Rate
I didn't want players to be able to release a game breaking infinite stream of bullets simply by holding down the spacebar. To prevent this, when the ship object's fireBullet function is called, it sets a boolean, firedRecently, to true. In addition, it sets an asynchronous call on the window to set firedRecently to true after 250ms.

# TODOS
- Implement high scores
- Easter egg in high levels
- Avoid generating asteroids within 1s of hitting player position in initial asteroid placement
- Better bomb animation
- Sound
