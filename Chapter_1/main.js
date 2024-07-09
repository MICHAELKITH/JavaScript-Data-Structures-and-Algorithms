//prime factors 

function value (n){

    if (n < 0){

        return "";
    }else{
        console.log("" + n);
        value(n-1);
    }
}

value(0)