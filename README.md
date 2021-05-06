## Toms Readme

I found this project very enjoyable overall, and believe I have hit the brief to the best of my ability. I was not familiar with the jasmine test suite, however I took this as an opportunity to learn the basics!

## Testing

I initially wrote the tests so that they throw an exception with a different message as per the brief (as can be seen in the commented out code at the bottom of the file), however when it came to the additional requirements outlined in the brief, I changed my approach. 

## Functionality

I found this to be fairly simple overall, and wanted to ensure that I didn't refactor the code too much to a point it became less easy to read and understand. As a null password will never be accepted, this function runs initially, followed by the `lowercaseCheck` function as it is stipulated that this requirement must be met in any instance. 

Once these two conditions have been met, only 1 of the following 3 need to be met for a password to be accepted, as per the first additional requirement in the brief. 

## Extra Consideration

In relation to this, I considered combining the `uppercaseCheck` and `lowercaseCheck` into one function which in this hypothetical scenario would speed up the tests, however I concluded that this would not be possible. 

This is because the `nullCheck` function would initially fun, and then the new combined upper and lower case check would run. This combined check would then fail if a password consisting of 8 or more lowercase characters, as it would not also contain uppercase characters. A password consisting of 8 or more lowercase characters should however be passed as it meets 3 of the conditions including condition 4.


## Conclusion

I am happy with how I have structured the code and believe that all of the tests work. I learnt about jasmine in the process which was also a bonus! I also  ensured that I kept to a 'test first' approach as outlined in the brief. I look forward to discussing it further and seeing where I could have improved. 