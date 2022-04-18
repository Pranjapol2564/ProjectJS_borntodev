function Total() {
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("soft").value);
    var sub3 = parseInt(document.getElementById("java").value);
    var sub4 = parseInt(document.getElementById("system").value);
    var sub5 = parseInt(document.getElementById("design").value);

    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("Please enter score in range 0-100");
    }
    else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById("total").innerHTML = "English scores : " + sub1 + "<br> Software Engineering scores : " + sub2 + " <br> Javascript : " + sub3 + " <br> System analysis scores : " + sub4 + " <br> Design thinking scores : " + sub5 + "<br> ---------------------- <br>" + " Total scores : " + total;
    }
}

function Average() {
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("soft").value);
    var sub3 = parseInt(document.getElementById("java").value);
    var sub4 = parseInt(document.getElementById("system").value);
    var sub5 = parseInt(document.getElementById("design").value);

    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("Please enter score in range 0-100");
    }
    else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var avg = total / 5;
        document.getElementById("avg").innerHTML = "Your average scores is :" + avg;
    }
}

function Gpa() {
    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("soft").value);
    var sub3 = parseInt(document.getElementById("java").value);
    var sub4 = parseInt(document.getElementById("system").value);
    var sub5 = parseInt(document.getElementById("design").value);

    var total = 0;
    var credit = 3;

    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("Please enter score in range 0-100");
    }
    else {
        const x = [sub1, sub2, sub3, sub4, sub5];

        for (i = 0; i < 5; i++) {
            total += cal(x[i], credit);
            console.log(i);
        }
    }

    var gpa = total / (credit * 5)
    document.getElementById("gpa").innerHTML = "Your Grade is :" + gpa;
}


function cal(x, credit) {
    var y = 0;

    if (x >= 80 && x <= 100) {
        y = 4 * credit;
    }
    else if (x >= 75 && x <= 79) {
        y = 3.5 * credit;
    }
    else if (x >= 70 && x <= 74) {
        y = 3 * credit;
    }
    else if (x >= 65 && x <= 69) {
        y = 2.5 * credit;
    }
    else if (x >= 60 && x <= 64) {
        y = 2 * credit;
    }
    else if (x >= 55 && x <= 59) {
        y = 1.5 * credit;
    }
    else if (x >= 50 && x <= 54) {
        y = 1 * credit;
    }
    else if (x >= 0 && x <= 49) {
        y = 0 * credit;
    }
    return y;
}