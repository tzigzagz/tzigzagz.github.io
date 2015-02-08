Tzzz Grid View ~ BAMFAPhD Read Me
===

Data acquired from and remixed for these interesting people:

[BMAMFAPhD]( http://bfamfaphd.com/ )


## A Remix of the US Census Bureau Jobs Data ~ An Interesting Fail?

### The Challenge

The US Census Bureau provides comprehensive statistics on the many (~470) jobs people do in the US.

The normal way of showing this data is on spreadsheet with columns for job titles, 
number of people in a job and the percentage of the total work force in that job.

On screen it takes a lot of scrolling to get to the bottom. On paper there are many pages to sift through.

The challenge is to see if it possible to create a graphic where all 470 jobs and their numbers can be visualized all at once.

In 2D/flatland graphic design, such a view is virtually impossible. 470 bars side by side are just too small to differentiate.
Attaching a legend makes the graphic huge. he issue is that some job title are dozens of characters long.
Either you have to cut off text in the title or it overwrites adjacent copy.

With 3D, the use of perspective offers some interesting possibilities. 
For example, by rotating the text, it is possible to introduce foreshortening.
This allows you to see the important first few words of a title while the subsequent, less important words fade into the distance.
Of course, with a bit of twisting you can bring all the text into view.

And then by pivoting text and graphics, the two can overwrite each other and still be highly identifiable.

The R1 chart is a work in progress.

When you are zoomed out, the text is too small to be seen clearly.
Current workaround: acquire a 27" display with retina resolution and the issue may be resolved.

### Road Map

* Add data for multiple years and tween the chart year by year
* Have something pop up as you highlight
* more sophisticated use of color


### Usage

* As with all 3D, a mouse or console is really helpful. Just saying.
* While cursor is over white space, hold down your left mouse button and drag to rotate the model
* Use the mouse-wheel to zoom in and out
* While cursor is over white space, hold down your right mouse button and drag to pan the model
* Viewed in its own tab there is a white background. Viewed with the Viewer there is a radial gradient background
* Mouse-over any item and it is highlighted. You may also use the cursor keys to highlight.
* The box in the top left is mostly for debugging, but could be used to search for jobs.
* Click the title in the box at top left to reload the display. Use this when you get lost in space.

### Change Log

2015-02-07 ~ Theo

* Read Me drafted
* First commit of files and folders
 