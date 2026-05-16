const API_KEY = "YOUR_API_KEY";

const weather = {

  apiKey: API_KEY,

  // =========================
  // WEATHER FETCH
  // =========================

  fetchWeather: async function (city) {

    try {

      document.querySelector(".weather")
        .classList.add("loading");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
      );

      if (!response.ok) {

        throw new Error("City not found");

      }

      const data = await response.json();

      this.displayWeather(data);

    } catch (error) {

      document.querySelector(".weather")
        .classList.remove("loading");

      alert("Weather data not found!");

      console.error(error);

    }
  },

  // =========================
  // DISPLAY WEATHER
  // =========================

  displayWeather: function (data) {

    const { name } = data;

    const { icon, description, main } = data.weather[0];

    const { temp, humidity } = data.main;

    const { speed } = data.wind;

    document.querySelector(".city")
      .innerText = `Weather in ${name}`;

    document.querySelector(".icon").src =
      `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.querySelector(".description")
      .innerText = description;

    document.querySelector(".temp")
      .innerText = `${Math.round(temp)}°C`;

    document.querySelector(".humidity")
      .innerText = `${humidity}%`;

    document.querySelector(".wind")
      .innerText = `${speed} km/h`;

    document.querySelector(".weather")
      .classList.remove("loading");

    // UPDATE BACKGROUND

    this.updateBackground(name, main);

  },

  // =========================
  // PREMIUM BACKGROUND ENGINE
  // =========================

  updateBackground: function (city, weatherType) {

    const cityImages = {

      // INDIA

      Delhi:
        "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg",

      Mumbai:
        "https://images.pexels.com/photos/2409953/pexels-photo-2409953.jpeg",

      Kolkata:
        "https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg",

      Chennai:
        "https://images.pexels.com/photos/3532558/pexels-photo-3532558.jpeg",

      Bengaluru:
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",

      Hyderabad:
        "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg",

      Pune:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",

      Jaipur:
        "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg",

      Lucknow:
        "https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg",

      Varanasi:
        "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg",

      Bhopal:
        "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",

      Patna:
        "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg",

      Chandigarh:
        "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg",

      Srinagar:
        "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg",

      Goa:
        "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",

      Kerala:
        "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg",

      Assam:
        "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg",

      Shillong:
        "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",

      Gangtok:
        "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",

      Leh:
        "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",

      // WORLD

      London:
        "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",

      Paris:
        "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",

      Tokyo:
        "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg",

      Dubai:
        "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg",

      Sydney:
        "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg",

      NewYork:
        "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg",

      Singapore:
        "https://images.pexels.com/photos/3152126/pexels-photo-3152126.jpeg",

      Moscow:
        "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg",

      Rome:
        "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg",

      Bangkok:
        "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"

    };

    // =========================
    // WEATHER FALLBACKS
    // =========================

    const weatherBackgrounds = {

      Clear:
        "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg",

      Clouds:
        "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg",

      Rain:
        "https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg",

      Drizzle:
        "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg",

      Thunderstorm:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",

      Snow:
        "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg",

      Mist:
        "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",

      Fog:
        "https://images.pexels.com/photos/1743392/pexels-photo-1743392.jpeg",

      Haze:
        "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg"

    };

    // =========================
    // EXTRA CINEMATIC RANDOMS
    // =========================

    const randomBackgrounds = [

      "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
      "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
      "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
      "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
      "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg",
      "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg",
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
      "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg"

    ];

    // =========================
    // BACKGROUND LOGIC
    // =========================

    const cityKey = city.replace(/\s/g, "");

    let backgroundImage =
      cityImages[cityKey] ||
      weatherBackgrounds[weatherType];

    // RANDOM FALLBACK

    if (!backgroundImage) {

      backgroundImage =
        randomBackgrounds[
          Math.floor(Math.random() * randomBackgrounds.length)
        ];

    }

    // APPLY BACKGROUND

    document.body.style.backgroundImage =
      `url('${backgroundImage}')`;

  },

  // =========================
  // SEARCH
  // =========================

  search: function () {

    const city =
      document.querySelector(".search-bar").value;

    if (city.trim() !== "") {

      this.fetchWeather(city);

    }
  }

};

// =========================
// SEARCH BUTTON
// =========================

document.querySelector(".search button")
  .addEventListener("click", function () {

    weather.search();

  });

// =========================
// ENTER KEY SEARCH
// =========================

document.querySelector(".search-bar")
  .addEventListener("keyup", function (event) {

    if (event.key === "Enter") {

      weather.search();

    }

  });

// =========================
// DEFAULT WEATHER
// =========================

weather.fetchWeather("Varanasi");