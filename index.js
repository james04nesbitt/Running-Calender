function getMiles(){
    var x = document.getElementById("mile").value;
    calculate(x);
}

function calculate(miles){

    const msf = miles;
    if(miles >= 60){
        const day6 = Math.round(miles/10);
        document.getElementById("text").innerHTML = day6;
    }
}