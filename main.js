// import { CurrentDate } from "./date.js"



let fajr = document.getElementById("Fajr")
let sun = document.getElementById("Sun")
let dhuhr = document.getElementById("Dhuhr")
let asr = document.getElementById("Asr")
let maghrib = document.getElementById("Maghrib")
let isha = document.getElementById("Isha")


class CurrentDate{
    constructor(){
        this.date = new Date
        this.day = this.date.getDate()
        this.month = this.date.getMonth()
        this.year = this.date.getFullYear()
    }

    ReturnDate() {
        let currentDate = `${this.day}-${this.month}-${this.year}`;
        return currentDate
    }
}


const current_day = new CurrentDate()



fetch(`http://api.aladhan.com/v1/calendarByAddress/${current_day.year}/${current_day.month+1}?address=Sultanahmet Mosque, Istanbul, Turkey&method=2`)
.then(response => response.json())
.then(data => {
    console.log(data.data[current_day.day - 1])
    fajr.textContent = (data.data[current_day.day]['timings']['Fajr'].slice(0, 5))
    sun.textContent = (data.data[current_day.day]['timings']['Sunrise'].slice(0, 5))
    dhuhr.textContent = (data.data[current_day.day]['timings']['Dhuhr'].slice(0, 5))
    asr.textContent = (data.data[current_day.day]['timings']['Asr'].slice(0, 5))
    maghrib.textContent = (data.data[current_day.day]['timings']['Maghrib'].slice(0, 5))
    isha.textContent = (data.data[current_day.day]['timings']['Isha'].slice(0, 5))
})

