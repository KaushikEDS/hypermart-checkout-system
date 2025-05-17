# Project Name
Hypermart Checkout System

## Assumptions
Input will always be positive

Input will always be integer

Items should be added only when clicked on "Checkout Items" button

Code complexity should be less wherever possible



## Comments
I noticed a point where it said I have to make this using HTML,CSS and JS. Having years of experience instinctively tells us to create a React or Angular app.

To mimic an architecture like React and Angular I did what most developers do, that is use lots of javascript. To keep it scalable I have initialized a variable "maxCounters", we can easily add any functionality to this project to make it dynamic. I have kept my logic independant of maxCounters

I have created class "Counter" to handle the basic operations which will happen after the input changes. I have put functions inside Counter class which can will be commonly used.

I have created class "CounterBuilder" to handle one time operations needed to builder Counter element. I could've kept all the logic inside Counter class itself, but it just waste memory since after building those functions wont be called anyways.

The tricky part is keeping the leftmost counter as minCounter, It took me a while to figure out. My goal is to not keep multiple loops to find it.

I thought to add a feature whenever we press enter on input field it would checkout, but I didnt do it because it would render the Checkout button meaningless. Also it wasnt specified anywhere that this needed to be done.

I have kept my loops to O(n) at max, I have avoided having nested loops because this is simple application which doesnt require it.


## Styling

I have used flexbox for majority of my career. I am aware that there we can also use display grid, but to avoid suspicion that I used ChatGpt I will stick to what I know.
In my career styling was not a major part, I have mostly dealt with the programming side of frontend. I do understand CSS very well though, with practice I can catch up to best practices easily.


