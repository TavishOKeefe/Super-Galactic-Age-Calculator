import { Age } from './../src/age';

describe('Age', function(){

  it('should test if we can create a new object', function(){
    let newObject = new Age(2000, 5, 20, "m");
    expect(newObject.year).toEqual(2000);
  });

  it('should check if age of user is accurate', function(){
    let newObject = new Age(2000, 5, 20, "m");
    expect(newObject.ageOfUser()).toEqual(18);
  });

  it('should check the user age in Mercury years', function(){
    let newObject = new Age(2000, 5, 20, "m");
    expect(newObject.userAgeInMercuryYears()).toEqual(75);
  });

  it('should check the user age in Venus years', function(){
    let newObject = new Age(2000, 5, 20, "m");
    expect(newObject.userAgeInVenusYears()).toEqual(29);
  });

  it('should check the user age in Mars years', function(){
    let newObject = new Age(2000, 5, 20, "m");
    expect(newObject.userAgeInMarsYears()).toEqual(9);
  });

  it('should check the user age in Jupiter years', function(){
    let newObject = new Age(2000, 5, 20, "m");
    expect(newObject.userAgeInJupiterYears()).toEqual(1);
  });

  it('should check how many years user has left to live, or how many years they have outlived their life expectancy', function(){
    let newObject = new Age(1920, 5, 20, "m");
    expect(newObject.timeLeftToLive()).toEqual(44);
  });

});
