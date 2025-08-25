/* - - - loops - - -

for
for in
for of
while
do while
*/

// For of loop -> [iterator] gives values

MyString = "MohammedFaizanKhan"
for (let c of MyString) {
     console.log(c)
}

//for in loop -> [key : value] used for objects

let obj = {
     name: "faizzan",
     CGPA: 9.0,
     Branch: "CSE"
}

for (let c in obj) {
     console.log(c) //prints keys
}

/* - - - functions - - -
     function name(parameters){
          block of code 
          return statement
     }
*/

/* - - - Arrow Function
     let fun = (parameters) => {
               code
          }

*/

var add = (a, b) => {
     console.log(a + b);
     return a + b
}

add(3, 4)

// - - - Strings - - -
console.log(MyString.toUpperCase());
/* .toLowerCase() 
 .length() 
 .slice(start , end-1) 
 .concat(str1 , str2 , ...) 
 .indexOf(0)
 */
console.log(MyString.slice(8, 14));

/* - - - Arrays - - -

Methods
     .toString()
     .join(delimeter) - joins all the elements
     .push()
     .unshift() - insert element at start
     .pop()
     .shift() - deletes first element
     .concat
     .sort()
     .splice(start , delete_no , added items) - add and deletes element

*/

let arr = [0,1,2,3,4,5,6]
arr.splice(1,2,'one','two')
console.log(arr);


console.log("Using For each ");

arr.forEach((val,ind,arr) => {
     console.log(ind,val,arr);
     
})



