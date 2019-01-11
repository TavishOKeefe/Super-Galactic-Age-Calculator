
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















}

export { Age };
