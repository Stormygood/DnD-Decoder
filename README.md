# DnD-Decoder
A simple, rough-around-the-edges decoder for a cipher my friend made for a dnd campaign

The decoder is made fully in Node.js, so you will need to install it to use it.

The program includes 2 folders:
"Lib" folder, which includes the functions and decoder lists which the source code uses
"proj" folder which includes the source code itself.

How the sipher works:
The cipher is similar to the binary cipher with the difference that it goes up to 3 instead of 2 (A - 1; B - 2; C - 3; D - 10...N - 32; O - 33; P - 100...)


After the numbers are converted to letters, the letter then gets shifted forward by 4. (I.e. A -> E;) 
IMPORTANT! The shifting rolls over (I.e. Z - > D)

How to use:
Enter the src.js file and enter your message in single quotes or double quotes. ('Like this' or "Like this")
Then just run the function. It displays the final message in the console. The cipher isn't intended to include numbers, lowercase letters or punctuation, so I haven't bothered adding those but if you wish to do so, be our guest.

Important: The output is in ALL CAPITALS.
