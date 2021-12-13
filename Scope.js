//scope - Availability of the variable in ur program

//block scope
//global scope

// {} -> braces , [] - sqaure bracts , ()-> paranthesis

/*
BLOCK 

{
  //block -1  
}
{
    //block -2 
}


*/

//block scope ---
let num2 = 6;
{
  let num = 3;
  console.log(num);
  console.log(num2)
}

console.log(num2)

