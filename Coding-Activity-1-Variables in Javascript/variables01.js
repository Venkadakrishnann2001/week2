/*Instructions
 - Greet your friend by printing a message to the console.
*/
//your code here
function greetings() {
  var name="greetings vivek";
  return name;
 }
 //leave this line unchanged to console log the results
console.log('results: ', greetings()); 
//don't change this line
if (typeof module !== 'undefined') {
  module.exports = greetings;
}