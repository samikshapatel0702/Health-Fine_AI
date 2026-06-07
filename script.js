let current = "";

let diseases = {
  asthma: {
    title: "ASTHMA",
    description: "A chronic condition that affects the airways and makes breathing difficult.",
    causes: "Allergies, dust, smoke, pollution, respiratory infections, genetics",
    riskGroup: "Children, people with allergies, smokers, people exposed to pollution",
    warningSigns: "Wheezing, coughing, chest tightness, shortness of breath",
    prevention: "Avoid triggers, keep air clean, take prescribed treatment, exercise carefully",
    caseInfo: "Asthma affects millions worldwide and can worsen with pollution and poor air quality.",
    symptoms: ["Coughing", "Wheezing", "Chest tightness", "Shortness of breath"],
    precautions: "Avoid smoke, avoid dust, follow treatment plan",
    tips: ["Keep inhaler accessible", "Avoid pollution", "Stay away from smoke", "Identify your triggers"],
    whoStat: "WHO: Asthma affected an estimated 262 million people in 2019.",
    whoYear: "WHO"
  },

  cancer: {
    title: "CANCER",
    description: "A disease in which abnormal cells grow uncontrollably in the body.",
    causes: "Smoking, alcohol, radiation, infections, genetics, unhealthy lifestyle",
    riskGroup: "Smokers, older adults, people with family history, people exposed to harmful chemicals",
    warningSigns: "Unusual lump, weight loss, fatigue, pain, long-lasting cough",
    prevention: "Avoid tobacco, healthy diet, screening, exercise, limit alcohol",
    caseInfo: "Cancer is one of the leading causes of death globally and early detection matters a lot.",
    symptoms: ["Unusual lump", "Weight loss", "Pain", "Fatigue"],
    precautions: "Avoid tobacco, go for screening, maintain healthy habits",
    tips: ["Do regular checkups", "Avoid smoking", "Eat healthy food", "Seek medical help for unusual signs"],
    whoStat: "WHO: Nearly 20 million new cancer cases were estimated globally in 2022.",
    whoYear: "WHO"
  },

  depression: {
    title: "DEPRESSION",
    description: "A common mental health condition that affects mood, thoughts, and daily life.",
    causes: "Stress, trauma, loneliness, life events, biology, family history",
    riskGroup: "People under stress, isolated individuals, people with past mental health challenges",
    warningSigns: "Persistent sadness, low energy, sleep problems, hopelessness, loss of interest",
    prevention: "Stress management, social support, sleep, routine, early help",
    caseInfo: "Depression is a major public health concern and can affect people of all ages.",
    symptoms: ["Sadness", "Low energy", "Sleep issues", "Loss of interest"],
    precautions: "Talk to a trusted person, maintain routine, seek professional support",
    tips: ["Get enough sleep", "Stay connected with people", "Do light exercise", "Reach out for support"],
    whoStat: "WHO: Around 280 million people in the world live with depression.",
    whoYear: "WHO"
  },

  diabetes: {
    title: "DIABETES",
    description: "A long-term condition in which the body has trouble regulating blood sugar levels.",
    causes: "Unhealthy diet, obesity, low physical activity, family history, insulin problems",
    riskGroup: "People with obesity, inactive adults, people with family history, older adults",
    warningSigns: "Frequent urination, unusual thirst, tiredness, blurred vision, slow wound healing",
    prevention: "Healthy eating, regular exercise, weight control, regular screening",
    caseInfo: "Diabetes is a major global health issue and its burden has increased strongly over the last decades.",
    symptoms: ["Frequent urination", "Excess thirst", "Fatigue", "Blurred vision", "Slow healing wounds"],
    precautions: "Reduce sugar intake, stay active, manage weight, monitor blood glucose",
    tips: ["Choose high-fiber foods", "Exercise most days", "Avoid sugary drinks", "Get regular blood sugar checks"],
    whoStat: "WHO: The number of people living with diabetes rose from 200 million in 1990 to 830 million in 2022.",
    whoYear: "WHO 2024"
  },

  heart_disease: {
    title: "HEART DISEASE",
    description: "A group of disorders affecting the heart and blood vessels, including coronary artery disease and heart failure.",
    causes: "Smoking, high cholesterol, high blood pressure, diabetes, obesity, unhealthy lifestyle",
    riskGroup: "Smokers, people with hypertension or diabetes, inactive individuals, older adults",
    warningSigns: "Chest pressure, breathlessness, unusual fatigue, palpitations, swelling",
    prevention: "No smoking, healthy diet, exercise, BP and cholesterol control",
    caseInfo: "Heart disease remains one of the biggest causes of illness and death globally.",
    symptoms: ["Chest pain", "Fatigue", "Shortness of breath", "Palpitations", "Swelling in legs"],
    precautions: "Avoid smoking, reduce trans fat, stay active, control BP and sugar",
    tips: ["Do brisk walking", "Eat heart-friendly food", "Limit fried foods", "Check cholesterol levels"],
    whoStat: "WHO: Cardiovascular diseases take an estimated 17.9 million lives each year globally.",
    whoYear: "WHO"
  },

  hypertension: {
    title: "HYPERTENSION",
    description: "A condition where blood pressure stays too high for a long time and can damage organs silently.",
    causes: "High salt intake, stress, obesity, alcohol use, inactivity, genetics",
    riskGroup: "Older adults, people with obesity, smokers, people with poor diet, inactive people",
    warningSigns: "Often no clear symptoms; sometimes headache, dizziness, chest discomfort",
    prevention: "Reduce salt, exercise regularly, avoid smoking, control stress, check BP routinely",
    caseInfo: "Hypertension is often called a silent killer because many people do not know they have it.",
    symptoms: ["Headache", "Dizziness", "Chest pain", "Blurred vision", "Shortness of breath"],
    precautions: "Reduce salt, manage stress, check blood pressure regularly",
    tips: ["Eat less salty food", "Stay physically active", "Sleep properly", "Check BP on time"],
    whoStat: "WHO: An estimated 1.28 billion adults aged 30–79 years worldwide have hypertension.",
    whoYear: "WHO"
  },

  obesity: {
    title: "OBESITY",
    description: "A condition involving excess body fat that raises the risk of diabetes, heart disease and other disorders.",
    causes: "Overeating, inactivity, unhealthy diet, poor sleep, genetics, environment",
    riskGroup: "People with sedentary lifestyle, high-calorie diet, poor sleep, family history",
    warningSigns: "Weight gain, fatigue, breathlessness, reduced stamina, joint strain",
    prevention: "Portion control, physical activity, balanced diet, routine habits",
    caseInfo: "Obesity increases the chance of many other diseases and is a major public health challenge.",
    symptoms: ["Fatigue", "Breathlessness", "Low stamina", "Body ache", "Snoring"],
    precautions: "Balanced diet, regular exercise, avoid overeating",
    tips: ["Choose home-cooked food", "Walk daily", "Reduce sugary snacks", "Track your weight"],
    whoStat: "WHO-supported estimates show that more than 1 billion people were living with obesity in 2022.",
    whoYear: "WHO"
  },

  pcos: {
    title: "PCOS",
    description: "A hormonal condition that can affect periods, metabolism, fertility, and overall health.",
    causes: "Hormonal imbalance, insulin resistance, genetics, lifestyle factors",
    riskGroup: "Women with family history, insulin resistance, weight gain, irregular cycles",
    warningSigns: "Irregular periods, acne, weight gain, excess hair growth, difficulty conceiving",
    prevention: "Healthy weight, exercise, balanced diet, regular medical guidance",
    caseInfo: "PCOS is common in women of reproductive age and often remains undiagnosed.",
    symptoms: ["Irregular periods", "Weight gain", "Acne", "Excess hair growth"],
    precautions: "Stay active, manage weight, seek gynecological advice",
    tips: ["Exercise regularly", "Reduce refined sugar", "Track periods", "Follow medical advice"],
    whoStat: "PCOS is one of the most common hormonal disorders affecting women of reproductive age.",
    whoYear: "General health reference"
  },

  stroke: {
    title: "STROKE",
    description: "A serious condition that happens when blood flow to part of the brain is interrupted.",
    causes: "High blood pressure, smoking, diabetes, high cholesterol, obesity",
    riskGroup: "Older adults, people with hypertension, smokers, people with diabetes",
    warningSigns: "Sudden weakness, slurred speech, facial drooping, confusion, vision trouble",
    prevention: "Control BP, avoid smoking, healthy diet, exercise, manage diabetes",
    caseInfo: "Stroke is a medical emergency and quick treatment can save life and reduce disability.",
    symptoms: ["Weakness", "Slurred speech", "Confusion", "Vision problems"],
    precautions: "Control blood pressure, act fast in emergencies, avoid smoking",
    tips: ["Know FAST warning signs", "Stay active", "Control sugar and BP", "Avoid tobacco"],
    whoStat: "Stroke is one of the leading causes of death and disability worldwide.",
    whoYear: "WHO"
  },

  thyroid: {
    title: "THYROID DISORDER",
    description: "A condition where the thyroid gland produces too much or too little hormone.",
    causes: "Iodine imbalance, autoimmune disease, genetics, hormonal problems",
    riskGroup: "Women, older adults, people with family history, autoimmune conditions",
    warningSigns: "Weight change, fatigue, hair fall, mood changes, temperature sensitivity",
    prevention: "Regular checkups, balanced iodine intake, early treatment",
    caseInfo: "Thyroid disorders are common and can affect metabolism, mood, and energy.",
    symptoms: ["Weight change", "Fatigue", "Hair fall", "Mood changes"],
    precautions: "Get thyroid tests, follow treatment, maintain balanced diet",
    tips: ["Take medicine regularly if prescribed", "Do routine checkups", "Watch symptoms", "Eat balanced food"],
    whoStat: "Thyroid disorders affect millions globally, though exact burden varies by type.",
    whoYear: "General health reference"
  }
};

// NAVIGATION
function showSection(sec, btn = null) {
    const sections = ["home", "calculator", "quiz", "bmi", "water", "about", "articles","feedback"];

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
    });

    const activeSection = document.getElementById(sec);
    if (activeSection) activeSection.classList.remove("hidden");

    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");
}

// SHOW/HIDE DISEASE LIST
function toggleDiseaseList() {
    const list = document.getElementById("diseaseList");
    if (list) list.classList.toggle("hidden");
}

// SELECT DISEASE
function selectDisease(d, element = null) {
    const data = diseases[d];
    if (!data) {
        alert("This disease data is not added yet.");
        return;
    }

    current = d;

    document.querySelectorAll("#diseaseList .card").forEach(card => {
        card.classList.remove("active-disease");
    });

    if (element) {
        element.classList.add("active-disease");
    }

    document.getElementById("name").innerText = data.title;
    document.getElementById("desc").innerText = data.description;
    document.getElementById("cause").innerText = data.causes;
    document.getElementById("riskGroup").innerText = data.riskGroup;
    document.getElementById("warningSigns").innerText = data.warningSigns;
    document.getElementById("prevention").innerText = data.prevention;
    document.getElementById("caseInfo").innerText = data.caseInfo;

    const whoStatEl = document.getElementById("whoStat");
    const whoYearEl = document.getElementById("whoYear");

    if (whoStatEl) whoStatEl.innerText = data.whoStat || "";
    if (whoYearEl) whoYearEl.innerText = data.whoYear || "";

    const div = document.getElementById("symptoms");
    div.innerHTML = "";

    data.symptoms.forEach(function(s) {
        div.innerHTML += `
            <label class="symptom-label">
                <input type="checkbox"> ${s}
            </label>
        `;
    });

    const resultBox = document.getElementById("resultBox");
    const tips = document.getElementById("tips");

    if (resultBox) resultBox.classList.add("hidden");
    if (tips) tips.classList.add("hidden");

    const list = document.getElementById("diseaseList");
    if (list) list.classList.add("hidden");

    const calcContent = document.querySelector(".calc-content");
    if (calcContent) {
        setTimeout(() => {
            calcContent.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 150);
    }
}

// RESULT
function showResult() {
    if (!current || !diseases[current]) {
        alert("Please select a disease first");
        return;
    }

    const checked = document.querySelectorAll("#symptoms input[type='checkbox']:checked").length;
    const total = diseases[current].symptoms.length;
    const percent = (checked / total) * 100;

    let risk = "";
    let color = "";

    if (percent > 70) {
        risk = "High Risk";
        color = "#e53935";
    } else if (percent > 40) {
        risk = "Medium Risk";
        color = "#ff9800";
    } else {
        risk = "Low Risk";
        color = "#43a047";
    }

    const box = document.getElementById("resultBox");
    box.classList.remove("hidden");
    box.style.background = color;

    document.getElementById("result").innerText = risk;
    document.getElementById("percentText").innerText = "Risk Score: " + percent.toFixed(0) + "%";

    const bar = document.getElementById("bar");
    bar.style.width = percent + "%";
    bar.style.background = "white";

    document.getElementById("why").innerText = checked + " out of " + total + " symptoms selected";
    document.getElementById("precaution").innerText = "Precautions: " + diseases[current].precautions;

    const tipsList = document.getElementById("tipsList");
    tipsList.innerHTML = "";

    diseases[current].tips.forEach(tip => {
        tipsList.innerHTML += "<li>" + tip + "</li>";
    });

    document.getElementById("tips").classList.remove("hidden");

    setTimeout(() => {
        box.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
}

function scrollToTips() {
    const tips = document.getElementById("tips");
    if (tips) {
        tips.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function resetCalculator() {
    const resultBox = document.getElementById("resultBox");
    const tips = document.getElementById("tips");

    if (resultBox) resultBox.classList.add("hidden");
    if (tips) tips.classList.add("hidden");

    const symptoms = document.querySelectorAll("#symptoms input[type='checkbox']");
    symptoms.forEach(item => item.checked = false);

    const calcContent = document.querySelector(".calc-content");
    if (calcContent) {
        calcContent.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// QUIZ
function checkQuiz() {
    let score = 0;

    for (let i = 1; i <= 6; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) {
            alert("Please answer all quiz questions.");
            return;
        }
        score += parseInt(selected.value);
    }

    const result = document.getElementById("quizResult");
    const scoreText = document.getElementById("quizScore");
    const adviceText = document.getElementById("quizAdvice");

    result.classList.remove("hidden");

    if (score <= 2) {
        scoreText.innerText = "Low Lifestyle Risk";
        adviceText.innerText = "Good job. Keep maintaining healthy habits.";
        result.style.background = "#43a047";
    } else if (score <= 4) {
        scoreText.innerText = "Moderate Lifestyle Risk";
        adviceText.innerText = "Your lifestyle can improve. Focus on exercise, sleep, and healthy food.";
        result.style.background = "#ff9800";
    } else {
        scoreText.innerText = "High Lifestyle Risk";
        adviceText.innerText = "You may need healthier daily habits. Improve diet, activity, sleep, and avoid smoking.";
        result.style.background = "#e53935";
    }
}

// BMI
function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }

    const bmi = weight / ((height / 100) * (height / 100));
    let category = "";
    let advice = "";
    let color = "";

    if (bmi < 18.5) {
        category = "Underweight";
        advice = "Try to eat balanced meals and maintain healthy nutrition.";
        color = "#29b6f6";
    } else if (bmi < 25) {
        category = "Normal";
        advice = "Great. Maintain your healthy lifestyle.";
        color = "#43a047";
    } else if (bmi < 30) {
        category = "Overweight";
        advice = "Try to exercise regularly and improve diet.";
        color = "#ff9800";
    } else {
        category = "Obese";
        advice = "Consider healthier food choices and regular physical activity.";
        color = "#e53935";
    }

    const box = document.getElementById("bmiResult");
    box.classList.remove("hidden");
    box.style.background = color;

    document.getElementById("bmiValue").innerText = "Your BMI: " + bmi.toFixed(1);
    document.getElementById("bmiCategory").innerText = "Category: " + category;
    document.getElementById("bmiAdvice").innerText = advice;
}

// WATER
function checkWater() {
    let glasses = parseInt(document.getElementById("waterInput").value);

    if (isNaN(glasses) || glasses < 0) {
        alert("Please enter a valid number of glasses.");
        return;
    }

    let level = "";
    let advice = "";
    let color = "";

    if (glasses >= 8) {
        level = "Great Hydration";
        advice = "You are drinking enough water. Keep it up.";
        color = "#43a047";
    } else if (glasses >= 5) {
        level = "Moderate Hydration";
        advice = "Try to drink a little more water during the day.";
        color = "#ff9800";
    } else {
        level = "Low Hydration";
        advice = "Your water intake seems low. Increase daily hydration.";
        color = "#e53935";
    }

    let box = document.getElementById("waterResult");
    box.classList.remove("hidden");
    box.style.background = color;

    document.getElementById("waterLevel").innerText = level;
    document.getElementById("waterAdvice").innerText = advice;

    let target = 8;
    let percent = (glasses / target) * 100;
    if (percent > 100) percent = 100;

    document.getElementById("waterBar").style.width = percent + "%";
    document.getElementById("waterProgressText").innerText = glasses + " / 8 glasses completed";
}
function toggleDarkMode() {
    let toggle = document.getElementById("themeToggle");

    if (toggle.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}
const dailyTips = [
    "Drink enough water throughout the day to stay hydrated.",
    "Take at least a 10-minute walk after meals.",
    "Try to sleep 7 to 8 hours every night.",
    "Reduce junk food and include more fruits in your diet.",
    "Stretch your body if you sit for long hours.",
    "Do not skip breakfast regularly.",
    "Limit sugary drinks and choose healthier options.",
    "Practice deep breathing for a few minutes every day.",
    "Exercise at least 30 minutes on most days.",
    "Regular health checkups can help detect problems early."
];

let tipIndex = Math.floor(Math.random() * dailyTips.length);

function showDailyTip() {
    const tipText = document.getElementById("dailyTip");
    if (tipText) {
        tipText.innerText = dailyTips[tipIndex];
    }
}

function nextTip() {
    tipIndex++;
    if (tipIndex >= dailyTips.length) {
        tipIndex = 0;
    }
    showDailyTip();
}

window.onload = function () {
    showDailyTip();
};
function toggleArticle(articleId) {
    const article = document.getElementById(articleId);
    if (article) {
        article.classList.toggle("hidden");
    }
}
function toggleArticle(articleId, btn) {
    const article = document.getElementById(articleId);
    if (article) {
        article.classList.toggle("hidden");
        if (btn) {
            btn.innerText = article.classList.contains("hidden") ? "Read More" : "Read Less";
        }
    }
}
function toggleArticle(articleId, button) {
    let article = document.getElementById(articleId);

    if (article.classList.contains("hidden")) {
        article.classList.remove("hidden");
        button.innerText = "Read Less";
    } else {
        article.classList.add("hidden");
        button.innerText = "Read More";
    }
}
function submitFeedback() {
    let name = document.getElementById("feedbackName").value.trim();
    let rating = document.getElementById("feedbackRating").value;
    let message = document.getElementById("feedbackMessage").value.trim();
    let resultBox = document.getElementById("feedbackResult");

    if (name === "" || rating === "" || message === "") {
        alert("Please fill all required fields.");
        return;
    }

    resultBox.classList.remove("hidden");

    document.getElementById("feedbackName").value = "";
    document.getElementById("feedbackEmail").value = "";
    document.getElementById("feedbackRating").value = "";
    document.getElementById("feedbackMessage").value = "";
}