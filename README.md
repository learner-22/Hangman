# **Hangman Game**

## **Description**

    Hangman is a guessing game. The player is posted with a question and is expected to answer within 5 guesses.  The player can choose to get a hint.

    For every wrong guess, the player loses a life.
    5 wrong guess is a game lost.
    Guessing the word correctly before losing all 5 lives is a win.
### **Wireframe**

[Wireframe Link] : (https://wireframe.cc/wzUB2R)

### **Explanations of specific Technologies** 

We have used HTML to design the webpage. CSS to  modify the look and feel of the game. JavaScript to incorporate functionality.
Lets understand a bit more about these technologies -

**HTML** -   
    
    Hyper Text Markup Language - Is a standard markup Language for creating WebPages and Content. HTML consists of a series of elements or tags , which we use to enclose or compartmentalize, different parts of the content to make it appear a certain way, or act a certain way.

**CSS** -  

 
   Cascading Style Sheets - CSS is a style sheet language and is used to selectively style HTML elements. Once we have the HTML page set up with the elements, we need to make it look good, well aligned and appealing. This is the exact outcome of applying CSS to a HTML page.

**JavaScript**  

    JavaScript is a dynamic programming language used for web development, web applications, game development, and lots more. It allows us to implement dynamic features on web pages that cannot be done with only HTML and CSS.

    Having said that, JavaScript is a text-based, object-oriented programming language used to make webpages and apps more dynamic and interactive.Used on both the client and server side, JavaScript offers enhanced abilities which make the webpages more dynamic and user-centric.

    To sum it up, we still have to use HTML for basic structure of websites and apps, while CSS is required for formatting and layout preferences as well as controlling how the text, images, and other content on a webpage is presented. From there, JavaScript can enhance those elements, taking them from being static features to interactive and event driven.

### **Approach Taken**
Hangman is a simple game where the  player is presented with a question and expected to guess it by suggesting letters. The player has limited number of errors that can be made when suggesting a letter. 

    1. The game needs a set of questions and corresponding answers and hints, which are stored in an array.

    2.As the player guesses a letter, it is checked with the answer and if there is a match, that letter is inserted in the answer array at the expected position.
    The player gets to guess the next letter.

    3.If the guess is incorrect the life count is decremented. The player gets to make the  next guess. 

    4.The game status is decided by checking the completion of all letters in the word  - Which is a win, or making five wrong guesses  - Which is a lose.

    5.Anytime in the game, the use can reset the game or ask for a hint.


### **Link to Hosted Site**
Installation Instructions