//truthy and falsy value 
// if there is string-> assumed to be true value 
//if empty string -> assumed to be false value 
const userEmail = "aniket.ai"

if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Don't have user email");
}

//falsy values
/*  
false, 0 , -0 ,BigInt , 0n ,"",null , undefined,NaN
*/

//truthy value 
/*
"0",'false'," ",[],{},function(){}//empty function 
*/

// const userEmail1 = []
// if(userEmail.length === 0){
//     console.log("Array is empty ");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty ");
}
