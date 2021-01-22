https://github.com/Fahmida04/Assignment3-js

kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
if(meter>0){
    return meter;
}
    return "Distance cannot be negative";
}

budgetCalculator
function budgetCalculator(watch, mobile, laptop){
    var totalBudget = watch*50 + mobile*100 + laptop*500;
    if(watch!=parseInt(watch) || mobile!=parseInt(mobile) || laptop!=parseInt(laptop)){
        return "Elements cannot be fractional"
    }
        return totalBudget;
}

hotelCost
function hotelCost(days){
    if(days<=10){
        var totalCost = days*100;
        return totalCost;
    }
    else if(days<=20){
        var firstPart = 10*100;
        var theRestDays = days-10;
        var secondPart = theRestDays*80;
        var totalCost = firstPart + secondPart;
        return totalCost;
    }
    else{
        var firstPart = 10*100;
        var secondPart = 10*80;
        var finalRestDays = days-20;
        var thirdPart = finalRestDays*50;
        var totalCost = firstPart + secondPart + thirdPart;
        return totalCost;
    }
}

megaFriend
function megaFriend(name){
    if(typeof(name)!= "object"){
        return "Give an array"
    }
    var largest = name[0];
    for (i = 0; i<name.length; i++){
        if(typeof(name[i]) == "number" || typeof(name[i]) == "boolean"){
            return "Allow only string in array"
        }
        var examine = name[i];
        if(examine.length > largest.length){
            largest = examine;
        }
    }
    return largest;
}
