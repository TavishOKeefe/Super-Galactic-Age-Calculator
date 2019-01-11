
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
    let ageInMercuryYears = Math.floor( age / .24 );

    return ageInMercuryYears;

  }

  userAgeInVenusYears(){

    let age = this.ageOfUser();
    let ageInVenusYears = Math.floor( age / .62 );

    return ageInVenusYears;

  }

  userAgeInMarsYears(){

    let age = this.ageOfUser();
    let ageInMarsYears = Math.floor( age / 1.88 );

    return ageInMarsYears;

  }

  userAgeInJupiterYears(){

    let age = this.ageOfUser();
    let ageInJupiterYears = Math.floor( age / 11.86 );

    return ageInJupiterYears;

  }

  timeLeftToLive(){

    let age = this.ageOfUser();
    let time = 0;

    if (this.sex === "m") {
      if (age >= 99 && age <= 109) {
        time += (age - 49);
      } else if (age >= 89 && age < 99) {
          time += (age - 54);
      } else if (age >= 79 && age < 89) {
          time += (age - 60);
      } else if (age >= 69 && age < 79) {
          time += (age - 62);
      } else if (age >= 59 && age < 69) {
          time += (age - 67);
      } else if (age >= 49 && age < 59) {
          time += (age - 67);
      } else if (age >= 39 && age < 49) {
          time += (age - 68);
      } else if (age >= 29 && age < 39) {
          time += (age - 71);
      } else if (age >= 19 && age < 29) {
          time += (age - 73);
      } else if (age > 0 && age < 19) {
          time += (age - 75);
      }
    }

    if (this.sex === "f") {
      if (age >= 99 && age <= 109) {
        time += (age - 52);
      } else if (age >= 89 && age < 99) {
          time += (age - 66);
      } else if (age >= 79 && age < 89) {
          time += (age - 64);
      } else if (age >= 69 && age < 79) {
          time += (age - 67);
      } else if (age >= 59 && age < 69) {
          time += (age - 72);
      } else if (age >= 49 && age < 59) {
          time += (age - 67);
      } else if (age >= 39 && age < 49) {
          time += (age - 68);
      } else if (age >= 29 && age < 39) {
          time += (age - 71);
      } else if (age >= 19 && age < 29) {
          time += (age - 73);
      } else if (age > 0 && age < 19) {
          time += (age - 75);
      }
    }

    return time;

  }

  timeOnEarth(){

    let earth = this.timeLeftToLive();

    if (earth <= 0){
      let positive = (earth * -1);
      return `You have ${positive} years left to live on Earth!`;
    } else {
      return `You have outlived the average person on Earth by ${earth} years!`;
    }

  }

  timeOnMercury(){

    let mercury = this.timeLeftToLive();

    if (mercury <= 0){
      let positive = (mercury * -1);
      let mercuryResult = (positive / .24 ).toFixed(2);
      return `You have ${mercuryResult} years left to live on Mercury!`;
    } else {
      let mercuryResult2 = (mercury / .24 ).toFixed(2);
      return `You have outlived the average person on Mercury by ${mercuryResult2} years!`;
    }

  }

  timeOnVenus(){

    let venus = this.timeLeftToLive();

    if (venus <= 0){
      let positive = (venus * -1);
      let venusResult = ( positive / .62 ).toFixed(2);
      return `You have ${venusResult} years left to live on Venus!`;
    } else {
      let venusResult2 = ( venus / .62 ).toFixed(2);
      return `You have outlived the average person on Venus by ${venusResult2} years!`;
    }

  }

  timeOnMars(){

    let mars = this.timeLeftToLive();

    if (mars <= 0){
      let positive = (mars * -1);
      let marsResult = ( positive / 1.88 ).toFixed(2);
      return `You have ${marsResult} years left to live on Mars!`;
    } else {
      let marsResult2 = ( mars / 1.88 ).toFixed(2);
      return `You have outlived the average person on Mars by ${marsResult2} years!`;
    }

  }

  timeOnJupiter(){

    let jupiter = this.timeLeftToLive();

    if (jupiter <= 0){
      let positive = (jupiter * -1);
      let jupiterResult = ( positive / 11.86 ).toFixed(2);
      return `You have ${jupiterResult} years left to live on Jupiter!`;
    } else {
      let jupiterResult2 = ( jupiter / 11.86 ).toFixed(2);
      return `You have outlived the average person on Jupiter by ${jupiterResult2} years!`;
    }

  }










}

export { Age };
