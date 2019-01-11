import { Age } from './age';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function(){
  $('#main-form').submit(function(event){
    event.preventDefault();

    let inputYear = parseInt($('#year').val());
    let inputMonth = parseInt($('#month').val());
    let inputDate = parseInt($('#day').val());
    let inputSex = parseInt($('#sex').val());

    console.log(inputYear);

    let userInformation = new Age(inputYear, inputMonth, inputDate, inputSex)

    if (inputMonth < 1 || inputMonth > 12){
      $('#result').html("Your month is invalid");
    } else if (inputDate > 31 || inputDate < 1){
      $('#result').html("Your day is invalid");
    } else if (inputSex === 0){
      $('#result').html("Please select your gender.");
    } else {
      $('#result').hide();
      $('#age-on-earth').text("This is your age on Earth: " + userInformation.ageOfUser());
      $('#age-on-mercury').text("This is your age on Mercury: " + userInformation.userAgeInMercuryYears());
      $('#age-on-venus').text("This is your age on Venus: " + userInformation.userAgeInVenusYears());
      $('#age-on-mars').text("This is your age on Mars: " + userInformation.userAgeInMarsYears());
      $('#age-on-jupiter').text("This is your age on Jupiter: " + userInformation.userAgeInJupiterYears());
      $('#time-left-on-earth').text(userInformation.timeOnEarth());
      $('#time-left-on-mercury').text(userInformation.timeOnMercury());
      $('#time-left-on-venus').text(userInformation.timeOnVenus());
      $('#time-left-on-mars').text(userInformation.timeOnMars());
      $('#time-left-on-jupiter').text(userInformation.timeOnJupiter());
    }
  })
})
