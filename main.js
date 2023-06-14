//let text = 'k5k3q2g5z6x9bn';


function returnNumbers(theText){
    let controlText = /[1-9]/g;
    let result = theText.match(controlText); 
    console.log(result);
}

returnNumbers('k5k3q2g5z6x9bn') ;
returnNumbers('k5k87987987sdgergewrew8868768n') ;