01 KilometerToMeter Problem Solving

        function kilometerToMeter(kilometer){
            var meter = kilometer * 1000;
            return meter;
        }
            var DhakaToCTG = kilometerToMeter(1);

        //    console Output
            console.log(DhakaToCtg)
       

// 02 budgetCalculator Problem Solving
 
    function budgetCalculator(watch,phone,laptop){
        var watchPrice = watch *50;
        var phonePrice = phone *100;
        var laptopProce = laptop *500;
        var totalPrice = watchPrice + phonePrice + laptopProce;
        return totalPrice;
    }
    var budgetPrice = budgetCalculator(1,1,1);

    // console output
    console.log(budgetPrice)

// 03 hotelCost Problem Solving
    function hotelCost(dayStay){
        var cost = 0;
        if(dayStay <= 10){
            cost = dayStay * 100;
        }
        else if (dayStay <= 20){
            var first10Days = 10*100;
            var remaining = dayStay - 10;
            last20Days = remaining * 80;
            cost = first10Days + last20Days;
        }
        else if(dayStay > 20){
            var first10Days = 10 * 100;
            var last20Days = 10*80;
            var ramaining = dayStay - 20;
            var lastDays= ramaining * 50;
            cost = first10Days + last20Days + lastDays;

        }
            return cost;
      }
           var totalCost = hotelCost(50);

    // console output
           console.log(totalCost)

// 04 megaFriend Problem Solving
    function megaFriend(names){
        var longestName = "";
        for (var i =0; i <names.length; i++){
            if(longestName.length<names[i].length){
                longestName = names[i];
            }
        }
        return longestName;
    }
    var getLongestName = megaFriend(["Sajid","Jam","SamirHasan","Kamrul"]);

    // console output
    console.log(getLongestName)
