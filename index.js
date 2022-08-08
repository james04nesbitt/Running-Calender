function getMiles(){
    var x = document.getElementById("mile").value;
    calculate(x);
}

function calculate(miles){
    const mwfs = Math.round(miles/9);
    var day6 = Math.round(miles/9);
    
    var tt = Math.round(miles/17 ) + mwfs;
   
    const msf = mwfs * 4 + 2 * tt + day6;
    
    
   
    day6 = day6 +(miles-msf); 
    if(miles < 60){
        
        tt = tt + mwfs/2;

    }
    
        
        document.getElementById("one").innerHTML = mwfs;
        document.getElementById("two").innerHTML = tt;
        
        document.getElementById("three").innerHTML = mwfs;
        document.getElementById("four").innerHTML = tt;
        document.getElementById("five").innerHTML = mwfs;
        document.getElementById("six").innerHTML = day6;

        if(miles >= 60){
            document.getElementById("seven").innerHTML = mwfs;
        }
        
    
}