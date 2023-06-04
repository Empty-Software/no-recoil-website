var DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return Math.floor((t2-t1)/(24*3600*1000));
    },
 
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
 
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

var d2 = new Date();
var d1 = new Date("06/04/2023")

FoxStealerCreated = DateDiff.inDays(d1, d2)
FoxStealerCreatedInYears = DateDiff.inYears(d1, d2)

function CalculateCreationDate() {
    if (FoxStealerCreated < 364) {
        document.getElementById("timer").innerHTML = FoxStealerCreated + " Days";
    }
    else if (FoxStealerCreated > 729) {
        document.getElementById("timer").innerHTML = FoxStealerCreatedInYears + " Years";
    }
    else if (FoxStealerCreated > 364) {
        document.getElementById("timer").innerHTML = FoxStealerCreatedInYears + " Year";
    }
}