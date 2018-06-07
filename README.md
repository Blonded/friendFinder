## Friend-Finder
Friend-Finder is a full-stack compatibility app, run through Express.js and Heroku for display.

Simply answer the questions given in the questionnaire and once you submit, your results will then be run with other users inputs and match you based off of similar/equal common interests.

Ta-Dah!
![Take the quiz here!](https://enigmatic-sands-67816.herokuapp.com/)

## Launching

In order for the app to function properly, please install the following packages:

* express
* body-parser
* path

-- Optional --
This package is downloaded and installed independently on your computer.
It will make it so you do not have to consistently rerun your terminal every time you make a change.
* nodemon

![Preview](http://i64.tinypic.com/hs2n4h.png)
![Preview Quiz](https://enigmatic-sands-67816.herokuapp.com/)

## 🛠️ Built With

* [HTML]
* [CSS]
* [JavaScript]
* [BootStrap]
* [jQuery]
* [node.js]
* [express.js]
* [Heroku]


## Sample-Code
In the code below we used a modal to show the user the results of when the user is matched
with another user, displaying their name and the image.

```

<!-- Modal -->
<div id="results-modal" class="modal fade" role="dialog">
   <div class="modal-dialog">

     <!-- Modal content-->
   <div class="modal-content">
       <div class="modal-header">
         <button type="button" class="close" data-dismiss="modal">&times;</button>
         <h2 class="modal-title"><strong>Matched!</strong></h2>
       </div>
       <div class="modal-body">
         <h2 id="match-name"></h2>
         <img id="match-img">
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
       </div>
     </div>


```



## Author
* **Lena Martinson** - [Blonded](https://github.com/Blonded)

## Resources
* **Bootstrap** - [Bootstrap](https://getbootstrap.com/)
* **Google Fonts** - [Google Fonts](https://fonts.google.com/)
* **Heroku** - [Heroku](https://heroku.com)
