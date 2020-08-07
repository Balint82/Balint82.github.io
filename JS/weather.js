

var temperatures = [-11.2, 14.4, 13.0, 17.3, 21.7, 18.2, 28];
var specials = [ "Ma Forró csokival várunk...", 
    "Melegedj át egy Forró teával!", "Ma finom sütivel várunk", 
    "Ma fagyit is kínálunk", 
    "Frissülj fel egy jéghideg limonádéval!"]


var specialsTemperature = [0, 15, 20, 25, 50,]


function weatherWidget() {

        const day = document.querySelector ("#day").value;
        const temperaturesDiv = document.querySelector ("#temperature");
        temperaturesDiv.innerHTML = temperatures[day] + ' &deg; C';
        
        for (let i = 0; i < specialsTemperature.length; i++) {
            if (temperatures[day] <= specialsTemperature[i]) {
                temperaturesDiv.innerHTML += '<br><span class="specials">' + specials[i] + '</span>';  
                break;
            }
        }

        
} 

function minTemperature() {
        let min = temperatures.length != 0 ? temperatures[0] : 0;
        for (let i = 1; i < temperatures.length; i++) {
                if (temperatures[i] < min) {
                    min = temperatures [i];
                    minTemperaturewrite.innerHTML += '<br><span class="minTemperaturewrite">'+ temperatures [i] +'</span>'
                    
                }
            
        }
     return min;  
       
    
    }

    

function maxtemperature() {
    let may = temperatures.length != 0 ? temperatures[0] : 0;
    for ( let i = 1; i < temperatures.length; i++) {
         if (temperatures[i] > max) {
                max = temperatures[i];
         }
    }
    return max;
}

function avgTemperature() {
        let avg = 0;
        for (let i = 0; i < temperatures.length; i++) {
                avg += temperatures[i];

        }
        return temperatures.length != 0 ? avg / temperatures.length: 0;
    }

