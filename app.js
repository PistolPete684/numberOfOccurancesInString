function strCount(str, letter){  
  //setup a variable to count the occurances 
  let count = 0;
  //setup a for loop to run through the string
  for (let i = 0; i < str.length; i++) {
  //use an if statement to add to the count when same occurance is found
    if (letter === str[i]) {
      count ++
    }
  }
 //return count once complete
 return count;
}