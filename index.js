// čia pateikti visus required/import metodus
// susikurti pavyzdinius objektus iš class
// parodyti, jog sukurti metodai tikrai veikia, t.y.
// prieš tai suvesta informacija turi įtaką likusiems
// kviečiamiems metodams


const Schedule = require("./Schedule");

const schedule = new Schedule('School');

schedule.intro();
// This is School schedule.

schedule.times();
//
