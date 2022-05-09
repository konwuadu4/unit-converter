let lenEl = document.getElementById("len-el")
let volEl = document.getElementById("vol-el")
let massEl = document.getElementById("mass-el")


let numConvert = document.getElementById("unit-el")

function lengthCal() {
    meter = numConvert.textContent;
    meterCon = meter / 0.3048;
    meterCon = meterCon.toFixed(3);
    feetCon = meter * 0.3048
    feetCon = feetCon.toFixed(3);
    lenEl.textContent = meter + " meters = " + meterCon + " feet | " + meter + " feet = " + feetCon + " meters "
}

lengthCal()

function volCal() {
    vol = numConvert.textContent;
    litrCon = vol * 0.264172;
    litrCon = litrCon.toFixed(3);
    galCon = vol / 0.264172
    galCon = galCon.toFixed(3);
    volEl.textContent = vol + " liters = " + litrCon + " gallons | " + vol + " gallons = " + galCon + " liters "
}

volCal()

function massCal() {
    kil = numConvert.textContent;
    kilCon = kil * 2.204622;
    kilCon = kilCon.toFixed(3);
    poundCon = kil / 2.204622;
    poundCon = poundCon.toFixed(3);
    massEl.textContent = kil + " liters = " + kilCon + " gallons | " + kil + " gallons = " + poundCon + " liters "
}

massCal()