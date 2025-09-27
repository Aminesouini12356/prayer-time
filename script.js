async function getPrayerTimes(mdina) {
      try {
        const url = `https://api.aladhan.com/v1/timingsByCity?city=${mdina}&country=Morocco`;
        const response = await fetch(url);
        const data = await response.json();
        const timings = data.data.timings;

        document.getElementById("fajr").textContent    = timings.Fajr;
        document.getElementById("shorouq").textContent = timings.Sunrise;
        document.getElementById("dhuhr").textContent   = timings.Dhuhr;
        document.getElementById("asr").textContent     = timings.Asr;
        document.getElementById("maghrib").textContent = timings.Maghrib;
        document.getElementById("isha").textContent    = timings.Isha;

        document.getElementById("time").textContent = data.data.date.readable;
        document.getElementById("city").textContent = `أوقات الصلاة: ${mdina}`;
      } catch (error) {
        alert("city not found");
        console.error(error);
      }
    }

    function updateCity() {
      const city = document.getElementById("cityInput").value.trim();
      if (city) {
        getPrayerTimes(city);
      } else {
        alert("please kteb mdina");
      }
    }

    // Call once when page loads
    getPrayerTimes("Casablanca");