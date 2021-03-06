import Vue from 'vue'; // NEW

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
  el: "#app",
  data: {
    moonDays: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    selectedMoonDay: null,
    moonWorld: "",
    sunWorld: "",
    mainWorld: "",
    setOfExercises: "",
    mainCircle: null,
    dateOfBirth: null,
    greeting: "",
    month: null,
    day: null,
    printPath: ""
  },
  methods: { // NEW
    updateGreeting: function(name) {
      this.greeting = "Hi! " + name;
    },

    //this function will take the value of user selection - moon day and depending on it assign a
    //
    assignMoonWorld: function() {

      let day = this.selectedMoonDay;
      console.log(day);

      if (day == 1 || day == 4 || day == 8 || day == 9 || day == 10 || day == 11 || day == 13 || day == 18 || day == 20 || day == 22 || day == 23 || day == 27 || day == 30){
        this.moonWorld = "S";
      }
      else if (day == 2 || day == 3 || day == 6 || day == 7 || day == 14 || day == 15 || day == 16 || day == 19 || day == 21 || day == 24 || day == 28 || day == 29){
        this.moonWorld = "G";
      }
      else{
        this.moonWorld = "D";
      }
    },

    assignSunWorld: function() {

      let day = this.day;

      if (this.month == 0){
        console.log("January");
        console.log(day);
        if (day == 2 || day == 4 || day == 7 || day == 11 || day == 12 || day == 21 || day == 22 || day == 24 || day == 29 || day == 30 || day == 31){
          this.sunWorld = "S";
          console.log("if statement true");
        }
        else if (day == 1 || day == 5 || day == 10 || day == 14 || day == 15 || day == 17 || day == 20 || day == 23 || day == 25 || day == 28) {
          this.sunWorld = "G";
        }
        else {
          this.sunWorld = "D";
        }
      }
      else if (this.month == 1) {
        if (day == 1 || day == 13 || day == 16 || day == 17 || day == 20 || day == 26 || day == 27 || day == 28){
          this.sunWorld = "S";
        }
        else if (day == 2 || day == 4 || day == 5 || day == 9 || day == 14 || day == 23 || day == 25) {
          this.sunWorld = "G";
        }
        else{
          this.sunWorld = "D";
        }
      }
      else if (this.month == 2) {
        if (day == 5 || day == 6 || day == 9 || day == 10 || day == 11 || day == 20 || day == 21 || day == 22 || day == 23 || day == 27){
          this.sunWorld = "S";
        }
        else if (day == 13 || day == 14 || day == 16 || day == 24 || day == 25 || day == 30 || day == 31) {
          this.sunWorld = "D";
        }
        else{
          this.sunWorld = "G";
        }
      }
      else if (this.month == 3) {
        if (day == 2 || day == 5 || day == 10 || day == 17 || day == 18 || day == 19 || day == 23 || day == 29){
          this.sunWorld = "S";
        }
        else if (day == 3 || day == 11 || day == 12 || day == 13 || day == 20 || day == 26 || day == 30) {
          this.sunWorld = "G";
        }
        else{
          this.sunWorld = "D";
        }
      }
      else if (this.month == 4) {
        if (day == 1 || day == 2 || day == 3 || day == 7 || day == 9 || day == 14 || day == 15 || day == 16 || day == 26 || day == 31) {
          this.sunWorld = "D";
        }
        else if (day == 5 || day == 12 || day == 13 || day == 17 || day == 19 || day == 20 || day == 21 || day == 23 || day == 28 || day == 29 || dy == 30) {
          this.sunWorld = "G";
        }
        else{
          this.sunWorld = "S";
        }
      }
      else if (this.month == 5) {
        if (day == 3 || day == 6 || day == 9 || day == 13 || day == 18 || day == 22 || day == 27 || day == 29) {
          this.sunWorld = "G";
        }
        else if (day == 2 || day == 5 || day == 11 || day == 12 || day == 16 || day == 20 || day == 21 || day == 23 || day == 25) {
          this.sunWorld = "S";
        }
        else{
          this.sunWorld = "D";
        }
      }
      else if (this.month == 6) {
        if (day == 1 || day == 5 || day == 7 || day == 12 || day == 15 || day == 17 || day == 20 || day == 24 || day == 31) {
          this.sunWorld = "D";
        }
        else if (day == 2 || day == 4 || day == 6 || day == 9 || day == 10 || day == 11 || day == 16 || day == 21 || day == 26 || dy == 29 || day == 30) {
          this.sunWorld = "G";
        }
        else{
          this.sunWorld = "S";
        }
      }
      else if (this.month == 7) {
        if (day == 6 || day == 9 || day == 12 || day == 17 || day == 20 || day == 21 || day == 24 || day == 25) {
          this.sunWorld = "G";
        }
        else if (day == 5 || day == 11 || day == 15 || day == 18 || day == 22 || day == 23 || day == 26 || day == 28 || day == 29) {
          this.sunWorld = "S";
        }
        else{
          this.sunWorld = "D";
        }
      }
      else if (this.month == 8) {
        if (day == 6 || day == 9 || day == 13 || day == 17 || day == 20 || day == 22 || day == 23 || day == 27 || day == 30) {
          this.sunWorld = "S";
        }
        else if (day == 10 || day == 12 || day == 14 || day == 15 || day == 28 || day == 29) {
          this.sunWorld = "D";
        }
        else{
          this.sunWorld = "G";
        }
      }
      else if (this.month == 9) {
        if (day == 1 || day == 2 || day == 5 || day == 8 || day == 10 || day == 13 || day == 16 || day == 19 || day == 21 || day == 22 || day == 28 || day == 30) {
          this.sunWorld = "D";
        }
        else if (day == 3 || day == 11 || day == 14 || day == 17 || day == 18 || day == 24 || day == 27 || day == 31) {
          this.sunWorld = "G";
        }
        else{
          this.sunWorld = "S";
        }
      }
      else if (this.month == 10) {
        if (day == 3 || day == 5 || day == 6 || day == 8 || day == 10 || day == 11 || day == 16 || day == 19 || day == 25 || day == 28) {
          this.sunWorld = "S";
        }
        else if (day == 1 || day == 2 || day == 7 || day == 12 || day == 13 || day == 18 || day == 22 || day == 29) {
          this.sunWorld = "G";
        }
        else{
          this.sunWorld = "D";
        }
      }
      else if (this.month == 11) {
        if (day == 4 || day == 7 || day == 11 || day == 13 || day == 17 || day == 21 || day == 22 || day == 27 || day == 29 || day == 30 || day == 31) {
          this.sunWorld = "D";
        }
        else if (day == 5 || day == 6 || day == 9 || day == 12 || day == 16 || day == 19 || day == 20 || day == 23 || day == 24 || day == 25) {
          this.sunWorld = "G";
        }
        else{
          this.sunWorld = "S";
        }
      }
    },

    assignMainWorld: function() {
      // console.log("moon world: " + this.moonWorld);
      // console.log("sun world: " + this.sunWorld);



      if (this.sunWorld == "G") {
        if (this.moonWorld == "G") {
          this.mainWorld = "G";
        }
        else if (this.moonWorld == "S") {
          this.mainWorld = "S";
        }
        else {
          this.mainWorld = "G";
        }
      }
      else if (this.sunWorld == "S") {
        if (this.moonWorld == "G") {
          this.mainWorld = "S";
        }
        else if (this.moonWorld == "S") {
          this.mainWorld = "S";
        }
        else {
          this.mainWorld = "D";
        }
      }
      else {
        if (this.moonWorld == "G") {
          this.mainWorld = "G";
        }
        else {
          this.mainWorld = "D";
        }
      }

    },

    assignMainCircle: function(){

      let day = this.day;

      if (this.month == 0){
        if (day == 1 || day == 2 || day == 3 || day == 4 || day == 31) {
          this.mainCircle = 3;
        }
        else if (day == 5 || day == 6 || day == 7) {
          this.mainCircle = 8;
        }
        else if (day == 8 || day == 9 || day == 10 || day == 11) {
          this.mainCircle = 1;
        }
        else if (day == 12 || day == 13 || day == 14) {
          this.mainCircle = 6;
        }
        else if (day == 15 || day == 16 || day == 17) {
          this.mainCircle = 4;
        }
        else if (day == 18 || day == 19 || day == 20) {
          this.mainCircle = 2;
        }
        else if (day == 21 || day == 22 || day == 23) {
          this.mainCircle = 5;
        }
        else if (day == 24 || day == 25 || day == 26) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 1) {
        if (day == 1 || day == 2 || day == 3 || day == 4) {
          this.mainCircle = 3;
        }
        else if (day == 5 || day == 6 || day == 7) {
          this.mainCircle = 8;
        }
        else if (day == 8 || day == 9 || day == 10 || day == 11) {
          this.mainCircle = 1;
        }
        else if (day == 12 || day == 13 || day == 14) {
          this.mainCircle = 6;
        }
        else if (day == 15 || day == 16 || day == 17) {
          this.mainCircle = 4;
        }
        else if (day == 18 || day == 19 || day == 20) {
          this.mainCircle = 2;
        }
        else if (day == 21 || day == 22 || day == 23) {
          this.mainCircle = 5;
        }
        else if (day == 24 || day == 25 || day == 26) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 2) {
        if (day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 31) {
          this.mainCircle = 3;
        }
        else if (day == 7 || day == 8 || day == 9) {
          this.mainCircle = 8;
        }
        else if (day == 10 || day == 11 || day == 12 || day == 13) {
          this.mainCircle = 1;
        }
        else if (day == 14 || day == 15 || day == 16) {
          this.mainCircle = 6;
        }
        else if (day == 17 || day == 18 || day == 19) {
          this.mainCircle = 4;
        }
        else if (day == 20 || day == 21) {
          this.mainCircle = 2;
        }
        else if (day == 22 || day == 23 || day == 24) {
          this.mainCircle = 5;
        }
        else if (day == 25 || day == 26 || day == 27) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 3) {
        if (day == 1 || day == 2 || day == 3 || day == 4 || day == 30) {
          this.mainCircle = 3;
        }
        else if (day == 5 || day == 6 || day == 7) {
          this.mainCircle = 8;
        }
        else if (day == 8 || day == 9 || day == 10 || day == 11) {
          this.mainCircle = 1;
        }
        else if (day == 12 || day == 13 || day == 14) {
          this.mainCircle = 6;
        }
        else if (day == 15 || day == 16 || day == 17) {
          this.mainCircle = 4;
        }
        else if (day == 18 || day == 19 || day == 20) {
          this.mainCircle = 2;
        }
        else if (day == 21 || day == 22 || day == 23) {
          this.mainCircle = 5;
        }
        else if (day == 24 || day == 25 || day == 26) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 4) {
        if (day == 1 || day == 2 || day == 3 || day == 4 || day == 30 || day == 31) {
          this.mainCircle = 3;
        }
        else if (day == 5 || day == 6 || day == 7) {
          this.mainCircle = 8;
        }
        else if (day == 8 || day == 9 || day == 10 || day == 11) {
          this.mainCircle = 1;
        }
        else if (day == 12 || day == 13 || day == 14) {
          this.mainCircle = 6;
        }
        else if (day == 15 || day == 16 || day == 17) {
          this.mainCircle = 4;
        }
        else if (day == 18 || day == 19 || day == 20) {
          this.mainCircle = 2;
        }
        else if (day == 21 || day == 22 || day == 23) {
          this.mainCircle = 5;
        }
        else if (day == 24 || day == 25 || day == 26) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 5) {
        if (day == 1 || day == 2 || day == 3) {
          this.mainCircle = 3;
        }
        else if (day == 4 || day == 5 || day == 6) {
          this.mainCircle = 8;
        }
        else if (day == 7 || day == 8 || day == 9 || day == 10) {
          this.mainCircle = 1;
        }
        else if (day == 11 || day == 12 || day == 13) {
          this.mainCircle = 6;
        }
        else if (day == 14 || day == 15 || day == 16) {
          this.mainCircle = 4;
        }
        else if (day == 17 || day == 18 || day == 19 || day == 20 || day == 21) {
          this.mainCircle = 2;
        }
        else if (day == 22 || day == 23 || day == 24) {
          this.mainCircle = 5;
        }
        else if (day == 25 || day == 26 || day == 27) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 6) {
        if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
          this.mainCircle = 3;
        }
        else if (day == 6 || day == 7 || day == 8) {
          this.mainCircle = 8;
        }
        else if (day == 9 || day == 10 || day == 11 || day == 12) {
          this.mainCircle = 1;
        }
        else if (day == 13 || day == 14 || day == 15 || day == 16) {
          this.mainCircle = 6;
        }
        else if (day == 17 || day == 18 || day == 19) {
          this.mainCircle = 4;
        }
        else if (day == 20 || day == 21 || day == 22 || day == 23) {
          this.mainCircle = 2;
        }
        else if (day == 24 || day == 25 || day == 26) {
          this.mainCircle = 5;
        }
        else if (day == 27 || day == 28 || day == 29) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 7) {
        if (day == 2 || day == 3 || day == 4 || day == 5 || day == 6) {
          this.mainCircle = 3;
        }
        else if (day == 7 || day == 8 || day == 9) {
          this.mainCircle = 8;
        }
        else if (day == 10 || day == 11 || day == 12 || day == 13) {
          this.mainCircle = 1;
        }
        else if (day == 14 || day == 15 || day == 16) {
          this.mainCircle = 6;
        }
        else if (day == 17 || day == 18 || day == 19) {
          this.mainCircle = 4;
        }
        else if (day == 20 || day == 21 || day == 22 || day == 23) {
          this.mainCircle = 2;
        }
        else if (day == 24 || day == 25 || day == 26) {
          this.mainCircle = 5;
        }
        else if (day == 27 || day == 28 || day == 29) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 8) {
        if (day == 2 || day == 3 || day == 4 || day == 5 || day == 6) {
          this.mainCircle = 3;
        }
        else if (day == 7 || day == 8 || day == 9) {
          this.mainCircle = 8;
        }
        else if (day == 10 || day == 11 || day == 12 || day == 13) {
          this.mainCircle = 1;
        }
        else if (day == 14 || day == 15 || day == 16) {
          this.mainCircle = 6;
        }
        else if (day == 17 || day == 18 || day == 19) {
          this.mainCircle = 4;
        }
        else if (day == 20 || day == 21) {
          this.mainCircle = 2;
        }
        else if (day == 22 || day == 23 || day == 24) {
          this.mainCircle = 5;
        }
        else if (day == 25 || day == 26 || day == 27) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 9) {
        if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
          this.mainCircle = 3;
        }
        else if (day == 6 || day == 7 || day == 8) {
          this.mainCircle = 8;
        }
        else if (day == 9 || day == 10 || day == 11 || day == 12) {
          this.mainCircle = 1;
        }
        else if (day == 13 || day == 14 || day == 15) {
          this.mainCircle = 6;
        }
        else if (day == 16 || day == 17 || day == 18 || day == 19 || day == 20) {
          this.mainCircle = 4;
        }
        else if (day == 21 || day == 22 || day == 23) {
          this.mainCircle = 2;
        }
        else if (day == 24 || day == 25 || day == 26) {
          this.mainCircle = 5;
        }
        else if (day == 27 || day == 28 || day == 29) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 10) {
        if (day == 2 || day == 3 || day == 4 || day == 5 || day == 6) {
          this.mainCircle = 3;
        }
        else if (day == 7 || day == 8 || day == 9) {
          this.mainCircle = 8;
        }
        else if (day == 10 || day == 11 || day == 12 || day == 13) {
          this.mainCircle = 1;
        }
        else if (day == 14 || day == 15 || day == 16) {
          this.mainCircle = 6;
        }
        else if (day == 17 || day == 18 || day == 19) {
          this.mainCircle = 4;
        }
        else if (day == 20 || day == 21 || day == 22) {
          this.mainCircle = 2;
        }
        else if (day == 23 || day == 24 || day == 25) {
          this.mainCircle = 5;
        }
        else if (day == 26 || day == 27 || day == 28) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }
      else if (this.month == 11) {
        if (day == 2 || day == 3 || day == 4 || day == 5 || day == 6 || day == 31) {
          this.mainCircle = 3;
        }
        else if (day == 7 || day == 8 || day == 9) {
          this.mainCircle = 8;
        }
        else if (day == 10 || day == 11 || day == 12 || day == 13) {
          this.mainCircle = 1;
        }
        else if (day == 14 || day == 15 || day == 16) {
          this.mainCircle = 6;
        }
        else if (day == 17 || day == 18 || day == 19) {
          this.mainCircle = 4;
        }
        else if (day == 20 || day == 21) {
          this.mainCircle = 2;
        }
        else if (day == 22 || day == 23 || day == 24) {
          this.mainCircle = 5;
        }
        else if (day == 25 || day == 26 || day == 27) {
          this.mainCircle = 7;
        }
        else {
          this.mainCircle = 9;
        }
      }

    },

    assignExercises: function() {
      let mainCircle = this.mainCircle;
      //this.assignSunWorld();
      let exercises = "";


      if(mainCircle == 1){
        if(this.mainWorld == "G") {
          exercises = "(G1): G5, S9, D3, G6, S7, D2, G1";
          this.printPath = "../src/assets/g1 do drukarek.pdf";
        }
        else if (this.mainWorld == "S") {
          exercises = "(S1): G8, S7, D3, G3, S6, D8, S1";
          this.printPath = "../src/assets/s1.pdf";
        }
        else{
          exercises = "(D1): G2, S4, D5, G6, S8, D6, D1";
          this.printPath = "../src/assets/d1 do drukarek.pdf";

        }
      }
      else if (mainCircle == 2) {
        if(this.mainWorld == "G") {
          exercises = "(G2): G6, S4, D6, G9, S8, D5, G2";
          this.printPath = "../src/assets/g2 do drukarek.pdf";
        }
        else if (this.mainWorld == "S") {
          exercises = "(S2): G3, S9, D7, G5, S1, D3, S2";
          this.printPath = "../src/assets/s2 do drukarek.pdf";

        }
        else{
          exercises = "(D2): G1, S3, D6, G5, S6, D9, D2";
          this.printPath = "../src/assets/d2 do drukarek.pdf";

        }
      }
      else if (mainCircle == 3) {
        if(this.mainWorld == "G") {
          exercises = "(G3): G9, S6, D5, G8, S3, D6, G3";
          this.printPath = "../src/assets/g3 do drukarek.pdf";
        }
        else if (this.mainWorld == "S") {
          exercises = "(S3): G9, S8, D1, G7, S6, D6, S3";
          this.printPath = "../src/assets/s3 do drukarek.pdf";

        }
        else{
          exercises = "(D3): G4, S7, D9, G8, S6, D4, D3";
          this.printPath = "../src/assets/d3 do drukarek.pdf";

        }
      }
      else if (mainCircle == 4) {
        if(this.mainWorld == "G") {
          exercises = "(G4): G8, S2, D7, G7, S9, D1, G4";
          this.printPath = "../src/assets/g4 do drukarek.pdf";
        }
        else if (this.mainWorld == "S") {
          exercises = "(S4): G3, S2, D6, G2, S7, D5, S4";
          this.printPath = "../src/assets/s4 do drukarek.pdf";

        }
        else{
          exercises = "(D4): G3, S1, D8, G2, S5, D7, D4";
          this.printPath = "../src/assets/d4 do drukarek.pdf";

        }
      }
      else if (mainCircle == 5) {
        if(this.mainWorld == "G") {
          exercises = "(G5): G7, S8, D2, G1, S2, D8, G5";
          this.printPath = "../src/assets/g5 do drukarek.pdf";
        }
        else if (this.mainWorld == "S") {
          exercises = "(S5): G6, S1, D8, G9, S8, D2, S5";
          this.printPath = "../src/assets/s5 do drukarek.pdf";

        }
        else{
          exercises = "(D5): G5, S6, D7, G7, S2, D1, D5";
          this.printPath = "../src/assets/d5 do drukarek.pdf";

        }
      }
      else if (mainCircle == 6) {
        if(this.mainWorld == "G") {
          exercises = "(G6): G1, S9, D3, G2, S8, D9, G6";
          this.printPath = "../src/assets/g6 do drukarek.pdf";
        }
        else if (this.mainWorld == "S") {
          exercises = "(S6): G4, S2, D5, G1, S3, D7, S6";
          this.printPath = "../src/assets/s6 do drukarek.pdf";

        }
        else{
          exercises = "(D6): G7, S8, D1, G3, S7, D2, D6";
          this.printPath = "../src/assets/d6 do drukarek.pdf";

        }
      }
      else if (mainCircle == 7) {
        if(this.mainWorld == "G") {
          exercises = "(G7): G4, S1, D8, G5, S5, D4, G7";
          this.printPath = "../src/assets/g7 do drukarek.pdf";
        }
        else if (this.mainWorld == "S") {
          exercises = "(S7): G2, S6, D4, G4, S5, D9, S7";
          this.printPath = "../src/assets/s7 do drukarek.pdf";

        }
        else{
          exercises = "(D7): G9, S9, D4, G1, S3, D5, D7";
          this.printPath = "../src/assets/d7 do drukarek.pdf";

        }
      }
      else if (mainCircle == 8) {
        if(this.mainWorld == "G") {
          exercises = "(G8): G3, S6, D5, G4, S5, D7, G8";
          this.printPath = "../src/assets/g8 do drukarek.pdf";
        }
        else if (this.mainWorld == "S") {
          exercises = "(S8): G7, S3, D9, G6, S4, D1, S8";
          this.printPath = "../src/assets/s8 do drukarek.pdf";

        }
        else{
          exercises = "(D8): G6, S2, D3, G9, S1, D4, D8";
          this.printPath = "../src/assets/d8 do drukarek.pdf";

        }
      }
      else if (mainCircle == 9) {
        if(this.mainWorld == "G") {
          exercises = "(G9): G2, S4, D6, G3, S6, D3, G9";
          this.printPath = "../src/assets/g9 do drukarek.pdf";
        }
        else if (this.mainWorld == "S") {
          exercises = "(S9): G1, S3, D2, G8, S7, D4, S9";
          this.printPath = "../src/assets/s9 do drukarek.pdf";

        }
        else{
          exercises = "(D9): G8, S5, D2, G4, S4, D3, D9";
          this.printPath = "../src/assets/d9 do drukarek.pdf";

        }
      }
      this.setOfExercises = exercises;
      console.log("====================");
      console.log(exercises);
    },

    //function to open a seperate window with a pdf document to print exercises
    printExercises: function() {

      //window.open('../src/assets/g4 do drukarek.pdf', '_blank', 'fullscreen=yes');
      window.open( this.printPath, '_blank', 'fullscreen=yes');

    },

    //showMonth function takes month value out of the date of birth selected by the userName
    //and updates the state of the month by using v-model.lazy on the input element so that it
    //will be updated after the change. Otherwis eit would be step behind with updating.
    showMonth: function() {

      var dateOfBirthInFormat = new Date(this.dateOfBirth);
      this.month = dateOfBirthInFormat.getMonth();
      console.log(dateOfBirthInFormat);
      console.log(this.month);

    },

    showDay: function() {

      var dateOfBirthInFormat = new Date(this.dateOfBirth);
      this.day = dateOfBirthInFormat.getDate();
      console.log(dateOfBirthInFormat);
      console.log(this.day);

    },

    //combo function to be called @change in the DOB input form so that it executes two functions
    //at one time - showDay and showMonth
    showDayMonth: function() {
      this.showDay();
      this.showMonth();
      this.assignSunWorld();
      this.assignMainCircle();
    },

    //combo function to call two functions at once
    giveExercisesAndMainWorld: function(){
      this.assignMainWorld();
      this.assignExercises();


    }


    // assignSunWorld: function() {
    //
    //   }


      // switch(dayToCheck) {
      //   // cases to get assigned "S" as a "moonWorld"
      //
      //   case 1:
      //   case 4:
      //   case 8:
      //   case 9:
      //   case 10:
      //   case 11:
      //   case 13:
      //   case 18:
      //   case 20:
      //   case 22:
      //   case 23:
      //   case 27:
      //   case 30:
      //     this.moonWorld = "S";
      //     break;
      //
      //   // cases to get assigned "G" as a "moonWorld"
      //   case 2:
      //   case 3:
      //   case 6:
      //   case 7:
      //   case 14:
      //   case 15:
      //   case 16:
      //   case 19:
      //   case 21:
      //   case 24:
      //   case 28:
      //   case 29:
      //     this.moonWorld = "G";
      //     break;
      //
      //   // cases to get assigned "D" as a "moonWorld"
      //   case 5:
      //   case 12:
      //   case 17:
      //   case 25:
      //   case 26:
      //     this.moonWorld = "D";
      //     break;
      //
      // }

  }
});
});
