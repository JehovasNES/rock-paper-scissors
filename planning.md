Part 1: Javascript, No UI

Goal:
    Create a game of rock, paper scissors that can be played against an CPU. //complete
    The player should be able to select rock, paper or scissors. //complete
    The AI should also be able to select these options at random. //correct, arrays
    Score should be kept within a variable up to 5. //complete
    When winning or losing there will be a loss and victory screen. //complete
    Needs to define each part as a variable, such as scissors beating paper and paper beating rock //incorrect, ended up using string comparison instead

Learned:
    Math.floor
    Math.random
    simple arrays
    functions
    making code self-explanatory

    
Post-Fix: 02/11
    removing 'personal' comments, the code explains itself
    simplify and change variable names to make the code legible
    removing redundant lines //some may remain
    made some variables local to functions to simplify and reduce unneccessary global variables.

Afterwards:
    The code can still be improved and before continuing onto the UI section, improving the functions should be first.
    The function should not be called to run directly but instead called through another function that tracks the score and declares winner.
    This should be a simple fix but creating a new file and just taking the base may be easier than removing line by line and doing a frankenstein.
    Note: It is only easier to do it this way due to the low amount of lines.  