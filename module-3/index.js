//Problem - 1
const getDate = () => {
  const date = document.getElementById("date").value;
  let dayOfWeek = new Date(date).toLocaleDateString("en-EN", {
    weekday: "long",
  });
  const element = document.getElementById("showDay");
  element.innerHTML = 'The day of the week is "' + dayOfWeek + '".';
  return dayOfWeek;
};

//Problem - 2
const getRoot = (array) => {
  let sum = 0;
  const value = array.map((item) => sum + Math.pow(item, 2));
  const sqr = Math.sqrt(value[value.length - 1]);
  const element = document.getElementById("sqrt");
  element.innerHTML = `The square root of the sum of squares of each element of this array is ${sqr}`;
};

//Problem - 3
const findPrime = (num) => {
  let response = "";
  let i;

  if (parseInt(num) === 1) {
    response = `${num} is not a prime number.`;
    return response;
  } else {
    for (i = 2; i < parseInt(num); i++) {
      if (Number.isInteger(parseInt(num) / i) && parseInt(num) / i !== 0) {
        response = `${num} is not a prime number.`;
        break;
      }
    }
  }
  if (i === parseInt(num)) response = `${num} is a prime number.`;

  const element = document.getElementById("prime");
  element.innerHTML = response;

  console.log(response);
  return response;
};

//Problem - 4
const newTab = () => {
  open("https://www.example.com", "width=800,height=600");
};

//Problem - 5
const navigate = () => {
  const name = navigator.appCodeName;
  const version = navigator.appVersion;
  const element = document.getElementById("nav");
  element.innerHTML = `Browser name : ${name}, version : ${version}`;

  console.log(name, version);
};

//Problem - 6
const geolocation = () => {
  let lat, long;
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos.coords.latitude);
    lat = pos.coords.latitude;
    long = pos.coords.longitude;

    document.getElementById(
      "geo"
    ).innerHTML = `Latitude: ${lat} & Longitude: ${long}`;
  });
};
