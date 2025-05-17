# Project Name
* Hypermark Checkout System

## About
I noticed a point where it said I have to make this using HTML,CSS and JS. Having years of experience instinctively tells us to create a React or Angular app.

To mimic an architecture like React and Angular I did what most developers do, that is use lots of javascript. To keep it scalable I have initialized a variable "maxCounters", we can easily add any functionality to this project to make it dynamic. I have kept my logic independant of maxCounters

I have created class "Counter" to handle the basic operations which will happen after the input changes. I have put functions inside Counter class which can will be commonly used.

I have created class "CounterBuilder" to handle one time operations needed to builder Counter element. I could've kept all the logic inside Counter class itself, but it just waste memory since after building those functions wont be called anyways.

The tricky part is keeping the leftmost counter as minCounter, It took me a while to figure out. My goal is to not keep multiple loops to find it.





