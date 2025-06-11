# Project introduction

I have made a dynamic web-page that has an active element with multi section and a working comment section.

## Table of Contents
- [HTML file](#html-file)
- [CSS file](#css-file)
- [JS file](#js-file)
- [Update](#update)

## HTML file

I have edited the html to add 2 sections(total: 5) and a comments form I decided to put it inside a section to have the active style and I chose to link the JS file before the body's closing tag.

## CSS file

I modifed the CSS file so that the comments have a style matching the page's style and added some styles to the nav-bar.

## JS file

I have called all the elements I needed and stored them into variables with meaningful names, also I bulit the nav-bar dynamicly using appendChild and createElement functions, added a smooth scrolling method, an active state, an area where the user's submitted comments are and stored them into localStorage so that they don't disapear on refresh.


## Update

Changes:
1. Added aria-labels to enhance accessibilty for screen readers in the HMTL file
2. Added clear, concise comments that explain what each function/block of code do
3. Added a progress bar that visually indicates how much of the page the User has scrolled through
4. Modified the scrollIntoView() funciton and made a correction to the scroll position to improve UX
5. Enhanced the validation of the comment's form and added ARIA feedback
6. Added CSS styles for the progress bar and the focus of the headings of the section
