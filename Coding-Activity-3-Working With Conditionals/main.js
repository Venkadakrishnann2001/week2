let response;

// Add your code here
function isOldEnoughToVote(age) {
  //your code goes here
  // return true or false based on the age
  if(age==18)
  {
    response="true"
  }
  else{
    response="false"
  }
  return response
}

//open the browser console to check results
console.log('results: ', isOldEnoughToVote(18));
// Don't edit the code below here
if (typeof module !== 'undefined') {
  module.exports = isOldEnoughToVote;
}
