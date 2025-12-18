document.getElementById("bmrForm").addEventListener("submit", function(e) {
      e.preventDefault();

      let age = +document.getElementById("age").value;
      let height = +document.getElementById("height").value;
      let weight = +document.getElementById("weight").value;
      let gender = document.getElementById("gender").value;

      let bmr;

      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      let bmi = weight / ((height / 100) ** 2);

      let message = `<strong style="font-size: clamp(20px, 4vw, 24px); color: #FF6B6B;">Your BMR is ${bmr.toFixed(0)} calories/day</strong><br><br>`;

      if (bmi >= 30) {
        message += `
          <span style="color: #e74c3c; font-size: clamp(16px, 3vw, 18px); font-weight: 600;">⚠️ You are obese.</span><br><br>
          <strong style="font-size: clamp(16px, 3vw, 18px); color: #333;">Healthy diet tips:</strong>
          
          <div class="tips-grid">
            <div class="tip-card" style="background: #E8F5E9;">
              <img src="Imgs/different-vegetables-collection-falling-air-260nw-2526760751.jpg" alt="Vegetables">
              <p>Eat vegetables and fruits daily</p>
            </div>
            
            <div class="tip-card" style="background: #FFEBEE;">
              <img src="Imgs/Fastfood.jpg" alt="Avoid Fast Food">
              <p>Avoid fast food and sugar</p>
            </div>
            
            <div class="tip-card" style="background: #E3F2FD;">
              <img src="Imgs/mineral-water-8cc11cec12c7471bac9378fa9757c83f.webp" alt="Drink Water">
              <p>Drink more water</p>
            </div>
            
            <div class="tip-card" style="background: #FFF3E0;">
              <img src="Imgs/istockphoto-1193426614-612x612.jpg" alt="Walking Exercise">
              <p>Walk at least 30 minutes a day</p>
            </div>
          </div>
        `;
      } else {
        message += "<span style='font-size: clamp(16px, 3vw, 18px); color: #27ae60; font-weight: 600;'>✅ Your weight is in a reasonable range. Keep going! 👍</span>";
      }

      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = message;
      resultDiv.classList.add("show");
    });