/*
  Create outline from mkd text.
*/

/*

# Title
## Background
### Introduction
## Methods
### Prepare
### Details
## Other topics
### Alternatives
## References

Input is a list of line such as 

let lines = ["#title", "###"]

Write a render to draw to the following:

- Title
  - Methods
    - Introduction
    ...
  - Other topics
  - References

Click each title to open it and display the sub-headings.

*/