Motion Poem
===

Also at: http://bit.ly/motion-poem

This repository should be cloned or forked to start your own Motion Poem project.

To implement a motion poem, open up the file `index.html` and write your code in the `<script id="motion-poem">` tag, located at the bottom of the page, within the `<body>` tag.

We're using the CreateJS Framework to provide an API for a Flash-like display-list (nested display objects, similarly implemented in Flash) and animation.

***

Within the `<script id="motion-poem">` in the `index.html` file, you'll find we've set you up with:

#### Some Useful Variables:
1. a variable called `draw`: this is a drawing utility to help you draw simple shapes.  You use it like:
        `var myRectangle = draw.rect(100, 100, '#CCC');`
2. a `view` property: you will add your display objects, shapes and images, to this view object using its API `view.addChild(myRectangle);`.  This will make your shapes visible.
3. a variable called `canvas`: this represents the full width and height of our drawing space.  Our `view` is a child of the `canvas`, and you can position your display objects, shapes and images, within the width and height of the canvas by referencing its height and with properties, like: `myRectangle.x = (canvas.width - myRectangle.width) / 2`

#### Some Useful Sections:
1. a section marked for declaring variables for your motion poem, that is, any data or display objects you need to create.
2. a section marked for initializing your variables.

#### The Update Method
3. Finally, where the magic happens, the `update()` function:  This function is called 60 times per second by the CreateJS framework's Tick object.  The repetitious calling of this function is essentially a pattern used in animation and games - ths method is called repetiously on a _framerate_ of 60 times per second, which means we can perform some calculations, making small, incremental changes to view-elements to simulate animation.

***

#### Only The Required Code

You'll see at the top of the `<script id="motion-poem">` tag, that we're importing our draw utility and declaring and initializing some our animation engine, so this code is required and MUST stay in place.

Next, you have a space for declaring and initializing your variables.  Finally, you have the `update()` function, and inside the code block of the `update()` function, you update your variables.  The full template looks like this:


````javascript
<script id="motion-poem">
    (function(){
        'use strict';
        
        var 
            draw = window.opspark.draw,
            physikz = window.opspark.racket.physikz,
            
            app = window.opspark.makeApp({update: update}),
            canvas = app.canvas, 
            view = app.view,
            fps = draw.fps('#000');


        /* 1. *************************************************************************************************************
         *
         * DECLARE VARIABLES HERE
         */


        /* 2. *************************************************************************************************************
         * 
         * INITIALIZE VARIABLES HERE
         */
    
        function update() {                     
	        /* 3. *********************************************************************************************************
	         *
	         * UPDATE ANY VARIABLES HERE > NOTE: The update() method is called 60 times per second.
	         */
                
        }
    })();
</script>
````

***

#### The Default Example Code

See below the default motion poem example:  This code comes as an example in the `<script id="motion-poem">` tag of the `index.html` file.  When you run the app or open the `index.html` file in chrome, the default motion-poem code will execute, and you'll see a little circle moving across the canvas.

To implement your own motion poem, find the comment that says:

````javascript
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TODO : REPLACE ALL EXAMPLE CODE YOUR OWN MOTION POEM ASSETS                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
````

...then in the places marked `DECLARE VARIABLES HERE` and `INITIALIZE VARIABLES HERE`, declare and initialize your variables.

Next, in the `update()` function, code the logic to update your variables.

Remember tho, you'll need to remove the default code we've added.  Here's the full default code:

````javascript
<script id="motion-poem">
    (function(){
        'use strict';
        
        var 
            draw = window.opspark.draw,
            physikz = window.opspark.racket.physikz,
            
            app = window.opspark.makeApp({update: update}),
            canvas = app.canvas, 
            view = app.view,
            fps = draw.fps('#000');
        
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // TODO : REPLACE ALL EXAMPLE CODE YOUR OWN MOTION POEM ASSETS                                                    //
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        /* 1. *************************************************************************************************************
         *
         * DECLARE VARIABLES HERE
         * (EXAMPLE: Declaring a variable called shape)
         *
         */
        var shape;


        /* 2. *************************************************************************************************************
         * 
         * INITIALIZE VARIABLES HERE
         * (EXAMPLE: Drawing a grey circle with a radius of 10 and adding it to the center of the view)
         *
         */
        shape = draw.circle(10, '#CCC');
        shape.x = shape.y = (canvas.width - shape.width) / 2;
        view.addChild(shape);

        function update() {                     
            /* 3. *********************************************************************************************************
             *
             * UPDATE ANY VARIABLES HERE > NOTE: The update() method is called 60 times per second.
             * (EXAMPLE: Move the shape on its x-axis 1 pixel to the right per frame, then check its position against the stage boundaries)
             *
             */
            shape.x += 1;
            if (shape.x > canvas.width + shape.radius) { shape.x = -(shape.radius); }
        }
    })();
</script>
````

Have fun!

NOTE: Normally bower components would not be committed to a repository, but we've done so for ease of configuration.  For advanced users, you can always run `bower install` to reinstall dependent JavaScript packages.
