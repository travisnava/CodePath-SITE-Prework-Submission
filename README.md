# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Travis Navarro**

Time spent: **16** hours spent in total

Link to project: 
https://believed-deserted-fountain.glitch.me/ <br />
https://glitch.com/edit/#!/believed-deserted-fountain

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
 <img src='https://cdn.glitch.global/3aaadf0a-5c6a-4335-b918-f23372c1a0bc/walkthrough1.gif?v=1647061539628' title='Video Walkthrough' width='' alt='Video Walkthrough' />
 <img src='https://cdn.glitch.global/3aaadf0a-5c6a-4335-b918-f23372c1a0bc/walkthrough2.gif?v=1647061542104' title='Video Walkthrough' width='' alt='Video Walkthrough' />
 <img src='https://cdn.glitch.global/3aaadf0a-5c6a-4335-b918-f23372c1a0bc/walkthrough3.gif?v=1647061544438' title='Video Walkthrough' width='' alt='Video Walkthrough' />


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://programminghead.com/how-to-play-audio-in-html-using-javascript/<br />
https://www.tutorialspoint.com/How-to-set-Text-alignment-in-HTML#:~:text=To%20set%20text%20alignment%20in%20HTML%2C%20use%20the%20style%20attribute,center%2C%20left%20and%20right%20alignment.<br />
https://www.wikihow.com/Code-an-Alert-with-a-Variable-Using-Javascript<br />
https://www.w3schools.com/tags/ref_colornames.asp<br />
https://mixkit.co/free-sound-effects/game/?page=2<br />
https://www.w3schools.com/howto/howto_css_rounded_images.asp<br />
https://careerkarma.com/blog/css-hide-element/<br />
https://www.w3schools.com/tags/tag_img.asp<br />
https://programminghead.com/how-to-play-audio-in-html-using-javascript/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)


As someone with limited web development experience, I found the tutorial very simple and easy to understand. However, my first challenge was within one of the optional features. The feature that gave me the most trouble was the one that seemed the easiest to implement, sprucing up the buttons by revealing an image when that button is pressed. As an image placeholder, I decided to use a classic picture of Rick Astley, known for his music and internet popularity as Rick Rolling online users. My issue came when I tried to implement the CSS rules to have Rick Astley hidden until the user pressed the button that he's on.  Again, as someone with limited background experience in web development, I found myself stumped and unsure how to implement this feature especially since I was unfamiliar with the syntax, but after thinking about the logic I then realized this feature should follow similar logic to how the button's color would change upon being pressed. My first reaction to encountering a problem is to read the documentation for things like <img>,CSS rules, and using the resources around me to familiarize myself with these new tools. After some research and trying different things, I was able to figure out how to set the initial visibility of the image to not be visible, by typing #img, then visibility:hidden.  By trying to follow the same logic that the buttons followed for changing colors when pressed, I was able to reason out that when the button is "active", or pressed, that the visibility for the img on that button should be visible. With all of the puzzle pieces figured out, and help with the syntax from various documentation, the implementation became much more clear, and I was finally able to correctly implement this feature. Throughout solving this issue I realized I wanted to keep my placeholder image of Rick Astley, and I decided to run with the overall theme of Rick Astley and his song Never Gonna Give You Up, and incorporating this well known internet joke into my game.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 


As someone who looks forward to learning as much as they can about this area of coding, and whose only experience with web development is from middle school, creating this game was extremely eye opening and left me wondering a couple things. The first thought I had was, what does the process of web development look like in a team setting? I imagine that this process has the workload divided into three teams, a HTML, JavaScript, and CSS team. Each team would be responsible for their section, and I would guess that the heaviest workload comes from the JavaScript, which is the part enables the page to be interactive and functional. This was the area that I felt like I spent the most in while making this project, and naturally it made sense, as it is in charge of making the web page functional. As a student in Computer Science, naturally I hear the words frontend and backend thrown around and this is how I would imagine the workload is split up in web development, which is something I would absolutely love to learn about and have the opportunity to create something in a team setting with these newfound tools.

My next question is both simple and complicated, what makes a web page great? As someone who's grown up in an era where the internet has always existed, I've found that web pages that were great had a few common features. Easy and accessible navigation, intuitive features, and clean and simple UI. Traversing a pleasing web page that works the way you would expect it to, and has features that make it easy to navigate, without cluttering up your whole screen, have been the web pages that I traditionally enjoy visiting the most. But as a web developer, I'm sure the definition of a great web page might differ a little. Whether that may be how fast a web page operates, or how stable it is, or even how minimal and clean the coding is kept, this is an insight I would surely love to learn from and incorporate into my own web pages some day.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright TRAVIS NAVARRO

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
