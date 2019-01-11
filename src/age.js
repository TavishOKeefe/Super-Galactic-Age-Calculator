
class Age {

  constructor(year, month, date, sex){

    this.year = year,
    this.month = month,
    this.date = date,
    this.sex = sex

  }

  ageOfUser() {

    let monthForDate = (this.month - 1);
    let millisecondsBetween = 0;

    let presentDate = new Date();
    let userBirthday = new Date(this.year, monthForDate, this.date)

    let todayTime = presentDate.getTime();
    let pastTime = userBirthday.getTime();

    if ( pastTime < 0) {
      millisecondsBetween += ((pastTime * -1) + todayTime);
    } else {
      millisecondsBetween += (todayTime - pastTime);
    }

    let resultInHours = (millisecondsBetween / 3600000);
    let resultInDays = (resultInHours / 24);
    let resultInYears = Math.floor(resultInDays / 365);

    return resultInYears;

  }

  userAgeInMercuryYears(){

    let age = this.ageOfUser();
    let ageInMercuryYears = Math.floor(age / .24 );

    return ageInMercuryYears;

  }

  userAgeInVenusYears(){

    let age = this.ageOfUser();
    let ageInVenusYears = Math.floor(age / .62 );

    return ageInVenusYears;

  }

  userAgeInMarsYears(){

    let age = this.ageOfUser();
    let ageInMarsYears = Math.floor(age / 1.88 );

    return ageInMarsYears;

  }

  userAgeInJupiterYears(){

    let age = this.ageOfUser();
    let ageInJupiterYears = Math.floor(age / 11.86 );

    return ageInJupiterYears;

  }

  timeLeftToLive(){

    let age = this.ageOfUser();
    let timeLeft = 0;
    let timeOutlived = 0;

    if (this.sex === "m") {
      if (age >= 99 && age <= 109) {
        timeOutlived += (age - 49);
      } else if (age >= 89 && age < 99) {
          timeOutlived += (age - 54);
      } else if (age >= 79 && age < 89) {
          timeOutlived += (age - 60);
      } else if (age >= 69 && age < 79) {
          timeOutlived += (age - 62);
      } else if (age > 67 && age < 69) {
          timeOutlived += (age - 67);
      } else if (age >= 59 && age <= 67) {
          timeLeft += (age - 67) * -1;
      } else if (age >= 49 && age < 59) {
          timeLeft += (age - 67) * -1;
      } else if (age >= 39 && age < 49) {
          timeLeft += (age - 68) * -1;
      } else if (age >= 29 && age < 39) {
          timeLeft += (age - 71) * -1;
      } else if (age >= 19 && age < 29) {
          timeLeft += (age - 73) * -1;
      } else if (age > 0 && age < 19) {
          timeLeft += (age - 75) * -1;
      }
    }

    if (this.sex === "f") {
      if (age >= 99 && age <= 109) {
        timeOutlived += (age - 52);
      } else if (age >= 89 && age < 99) {
          timeOutlived += (age - 66);
      } else if (age >= 79 && age < 89) {
          timeOutlived += (age - 64);
      } else if (age >= 69 && age < 79) {
          timeOutlived += (age - 67);
      } else if (age >= 59 && age < 69) {
          timeLeft += (age - 72) * -1;
      } else if (age >= 49 && age < 59) {
          timeLeft += (age - 67) * -1;
      } else if (age >= 39 && age < 49) {
          timeLeft += (age - 68) * -1;
      } else if (age >= 29 && age < 39) {
          timeLeft += (age - 71) * -1;
      } else if (age >= 19 && age < 29) {
          timeLeft += (age - 73) * -1;
      } else if (age > 0 && age < 19) {
          timeLeft += (age - 75) * -1;
      }
    }

    if (timeLeft === 0){
      return timeOutlived;
    } else if (timeOutlived === 0){
      return timeLeft;
    }

  }













}

export { Age };
