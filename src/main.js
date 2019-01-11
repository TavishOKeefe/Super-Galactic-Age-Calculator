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

    let userInformation = new Age(inputYear, inputMonth, inputDate, inputSex)

    if (inputMonth < 1 || inputMonth > 12){
      $('#result').html("Your month is invalid");
    } else if (inputDate > 31 || inputDate < 1){
      $('#result').html("Your day is invalid");
    } else {
      $('#age-on-earth').text(userInformation.ageOfUser());
      $('#age-on-mercury').text(userInformation.userAgeInMercuryYears());
      $('#age-on-venus').text(userInformation.userAgeInVenusYears());
      $('#age-on-mars').text(userInformation.userAgeInMarsYears());
      $('#age-on-jupiter').text(userInformation.userAgeInJupiterYears());
      $('#time-left-on-earth').text(userInformation.timeOnEarth());
      $('#time-left-on-mercury').text(userInformation.timeOnMercury());
      $('#time-left-on-venus').text(userInformation.timeOnVenus());
      $('#time-left-on-mars').text(userInformation.timeOnMars());
      $('#time-left-on-jupiter').text(userInformation.timeOnJupiter());
    }
  })
})
