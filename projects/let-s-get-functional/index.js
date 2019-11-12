// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lowdown-tbgarza2");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array){
 let arrOfMaleObj =  _.filter(array, function(customerObj, index, array){
        return customerObj.gender === "male";
    });
    return arrOfMaleObj.length;
};
maleCount(customers);

var femaleCount = function(array){
   return  _.reduce(array, function(prev, customerObj, i){
        if (customerObj.gender === "female"){
            prev += 1;
        }
        return prev;
    }, 0)
};

var oldestCustomer = function(array){
   let oldestObj = _.reduce(array, function(prev, current, i){
        if(prev.age < current.age){
           return current;
        } else
        return prev;
    });
    return oldestObj.name;
};

var youngestCustomer = function(array){
   let youngestObj = _.reduce(array, function(prev, current, i){
        if(prev.age > current.age){
           return current;
        } else
        return prev;
    });
    return youngestObj.name;
};

var averageBalance = function(array){
   let totalBal = _.reduce(array, function(prev, element, i){
       let balance = parseInt(element.balance.replace(/[^\w\s]/gi, ''), 10);
        prev += balance;
        return prev;
    }, 0);
    // console.log(totalBal);
    let avg = (totalBal/(array.length * 100));
    // console.log(avg);
    return avg;
};
averageBalance(customers);

var firstLetterCount = function(array, a){
    return  _.reduce(array, function(prev, element, i){
        if (element.name[0].toUpperCase() === a.toUpperCase()){
            prev += 1;
        }
        return prev;
    }, 0);
};


var friendFirstLetterCount = function(array, customer, a){
    var friendArr = [];
    for (let j=0; j<array.length; j++){
        if(array[j].name === customer){
            // console.log(array[j].friends);
            friendArr = array[j].friends;
            break;
        }
        
    }
        return _.reduce(friendArr, function(prev, element, i){
            if (element.name[0].toUpperCase() === a.toUpperCase()){
            prev += 1;
        }
        // console.log(prev);
        return prev;
        }, 0);
    // console.log(friendArr);
};
console.log(
friendFirstLetterCount(customers, "Doris Smith", "B"));

var friendsCount = function(array, name){
    let friends = []; // empty array to gather friends names from 
    for (let k=0; k<array.length; k++){ //loop to go through array to get to obj element
        for(let j=0; j<array[k].friends.length; j++){ // loop to go through the friends array in each object within main array
        if(array[k].friends[j].name === name){ // test to see if friends array contains given name 
            // console .log(array[k].friends[j].name);
            friends.push(array[k].name); // if statement true then push the obj element's name value into empty array
            // return friends; // return friends array back 
        }    
        }
    }
    // console.log(friends);
    return friends; // return friends array outside of loop (not sure if I need this)
};
friendsCount(customers, "Olga Newton");

var topThreeTags = function(array){
    let arrTags = [];
 let newTags =  _.reduce(array,function(prev,curr,i){
      if(curr.tags !== undefined){
          arrTags.push(curr.tags);
          // flatten the nesetd arrays
      }
       return  [].concat(...arrTags);
 });
 let tags = _.reduce(newTags,function(prev,curr){
        //   console.log(prev);
           if(prev[curr] === undefined){
               prev[curr] = 1;
           } else {
               prev[curr] += 1;
           } return prev;
},{});
var newArray = [];
_.each(tags,function(count,word,object){
    newArray.push([word,count]);
});
// sort our array highest to lowest
 newArray.sort(function(a,b){
   return b[1] - a[1];
 });
// console.log(newArray);
 var final = [];
 for(var i = 0; i < 3; i++){
     final.push(newArray[i][0]);
 } return final;
};

topThreeTags(customers);

var genderCount = function(array){ 
    let male = 0;
    let female = 0;
    let nonBinary = 0;
    return  _.reduce(array, function(prev, customerObj, i){
        if (customerObj.gender === "male"){
            male += 1;
        } else if (customerObj.gender === "female"){
            female += 1;
        } else{
            nonBinary += 1;
        }
        return {
            male,
            female,
            "non-binary": nonBinary
        };
    }, 0);
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
