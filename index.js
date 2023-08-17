1.// **************************************************************************
// In this simple assignment you are given a number and have to make it negative.But maybe the number is already negative ?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
// _______________________________________________________________________
// 1ий варіант рішення:
// function makeNegative(num) {
//   if(num > 0){
//     return -num;
//   }
//      else{
//        return num;
       
//      }
// }
// _______________________________________________________________________
// 2ий варіант рішення:
// function makeNegative(num) {
//    return num > 0 ? -num : num;
// }

// console.log(makeNegative(8));




2. // **************************************************************************

// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
// _____________________________________________________________________
// function tooBoolean(b) {
//     if (b === true) {
//         return "true";
//     }
//     else {
//         return "false";
//     }
    
    
// }

// console.log(tooBoolean(false));


    

3. // **************************************************************************
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"





// function bmi(weight, height) {
//     const total = weight / (height * height);
    
//     if (total <= 18.5) {
//          return "Underweight";
//   }

//     else if (total <= 25.0) {
//          return "Normal";
//   }
 
//     else if (total <= 30.0) {
//          return "Overweight";
      
//   }
   
//     else (total > 30.0)
//          return "Obese";
    
    
 
// }
// console.log(bmi(900, 890));

