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
    dateOfBirth: null,
    greeting: "",
    month: null,
    day: null
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
