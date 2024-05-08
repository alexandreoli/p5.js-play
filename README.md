# p5.js-play
Playing with p5


Here is how to run it p5.js in your browser

[acess p5.js/org](https://editor.p5js.org/)

in the index file change the src from <script> to match your .js file name to run it
in my case I can change to sketch.js or points.js

<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <main>
    </main>
    <script src="sketch.js"></script>
  </body>
</html>


Sketch is to make a maze
![image](https://github.com/alexandreoli/p5.js-play/assets/57917511/0422a28f-6743-4868-acd0-30dc4eabfa8c)




and points to make an interative interface to make ponits and try to find the best closed path between them, 
you can try downloading my rep and only change the pathing algorithm, you just need to edit the function "this.findCloser()"
![image](https://github.com/alexandreoli/p5.js-play/assets/57917511/f7e2bd83-adfb-4d42-a134-e39a60306623)
