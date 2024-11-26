const levels = [
    {
      questions: [
        {
          question: "पेनिसिलिन की खोज किसने की थी?",
          options: ["अलेक्ज़ेंडर फ्लेमिंग", "लुई पाश्चर", "मार्क्स", "डार्विन"],
          answer: 0,
        },
        {
          question: "भारत के साथ पाकिस्तान को स्वतंत्रता किस वर्ष मिली थी?",
          options: ["1945", "1947", "1950", "1960"],
          answer: 1,
        },
        {
          question: "रोम का पहला सम्राट कौन था?",
          options: ["ऑगस्टस", "कैलिगुला", "नीरो", "टाइटस"],
          answer: 0,
        },
        {
          question: "1185 से 1868 तक किस देश पर शोगुनों का शासन था?",
          options: ["जापान", "चीन", "कोरिया", "वियतनाम"],
          answer: 0,
        },
        {
          question: "किस वर्ष में बर्लिन दीवार गिर गई थी?",
          options: ["1985", "1989", "1990", "1992"],
          answer: 1,
        },
        {
          question: "पहला आईफोन किस वर्ष में जारी किया गया था?",
          options: ["2005", "2007", "2010", "2012"],
          answer: 1,
        },
        {
          question: "2014 में 17 वर्ष की उम्र में नोबेल शांति पुरस्कार जीतने वाले सबसे युवा व्यक्ति का नाम क्या था?",
          options: ["मलाला यूसुफजई", "कैलाश सत्यार्थी", "नील्स बोह्र", "मार्टिन लूथर किंग"],
          answer: 0,
        },
        {
          question: "1986 में यूक्रेन में हुआ परमाणु दुर्घटना किस परमाणु संयंत्र में हुआ था?",
          options: ["चेरनोबिल", "फुकुशिमा", "थ्री माइल आइलैंड", "ताशकंद"],
          answer: 0,
        },
        {
          question: "कौन सी अंतरराष्ट्रीय संस्था विश्व युद्ध I के बाद विश्व शांति बनाए रखने के लिए बनाई गई थी?",
          options: ["लीग ऑफ नेशंस", "संयुक्त राष्ट्र", "ओपेक", "डब्ल्यूटीओ"],
          answer: 0,
        },
        {
          question: "हान वंश ने चीन में कितने वर्षों तक शासन किया?",
          options: ["200 वर्ष", "300 वर्ष", "400 वर्ष", "500 वर्ष"],
          answer: 2,
        },
        {
          question: "पहला व्यक्ति कौन था जिसने अंतरिक्ष में यात्रा की थी?",
          options: ["यूरी गागरिन", "नील आर्मस्ट्रांग", "राल्फ जैक्सन", "एडविन एल्ड्रिन"],
          answer: 0,
        },
        {
          question: "गूगल किस वर्ष लॉन्च हुआ था?",
          options: ["1995", "1998", "2000", "2002"],
          answer: 1,
        },
        {
          question: "1746 में क्यूलोडे लड़ाई किस देश में लड़ी गई थी?",
          options: ["स्कॉटलैंड", "इंग्लैंड", "फ्रांस", "जर्मनी"],
          answer: 0,
        },
        {
          question: "हंड्रेड इयर्स वार में किसने भाग लिया था?",
          options: ["ब्रिटेन और फ्रांस", "इंग्लैंड और जर्मनी", "फ्रांस और स्पेन", "ब्रिटेन और रूस"],
          answer: 0,
        },
        {
          question: "वह प्राचीन व्यापार मार्ग का क्या नाम था जो पूर्व और पश्चिम को जोड़ता था?",
          options: ["रेशम मार्ग", "मेजोपोटामिया मार्ग", "सिल्क रोड", "पानीपत मार्ग"],
          answer: 2,
        },
        {
          question: "दुनिया की सबसे पुरानी सभ्यता कौन सी थी?",
          options: ["मेसोपोटामिया", "इजिप्ट", "चीन", "भारत"],
          answer: 0,
        },
        {
          question: "रूस के अंतिम ज़ार का नाम क्या था?",
          options: ["निकोलस II", "पॉल I", "पीटर्स I", "अलेक्ज़ेंडर III"],
          answer: 0,
        },
        {
          question: "फेसबुक किस वर्ष बनाया गया था?",
          options: ["2004", "2005", "2007", "2010"],
          answer: 0,
        },
        {
          question: "जोआन ऑफ आर्क को किस फ्रांसीसी शहर में जलाया गया था?",
          options: ["रूआं", "पेरिस", "मार्सिले", "लील"],
          answer: 0,
        },
        {
          question: "टेलीफोन का आविष्कार किसने किया था?",
          options: ["अलेक्ज़ेंडर ग्राहम बेल", "टोमस एडिसन", "निकोला टेस्ला", "गॉटलिब डेमलर"],
          answer: 0,
        },
        {
          question: "फ्रांसीसी क्रांति किस वर्ष शुरू हुई थी?",
          options: ["1775", "1789", "1792", "1800"],
          answer: 1,
        },
        {
          question: "इंकन साम्राज्य की राजधानी क्या थी?",
          options: ["कुस्को", "लिमा", "चिली", "निकी"],
          answer: 0,
        },
        {
          question: "खमेर रूज का नेता कौन था?",
          options: ["पोल पॉट", "हू जिंताओ", "प्रमोद महाजन", "हुगो चावेज"],
          answer: 0,
        },
        {
          question: "जोहान्स गुटेनबर्ग को क्या अविष्कार का श्रेय दिया जाता है?",
          options: ["प्रेस मशीन", "कागज", "धातु", "स्मार्टफोन"],
          answer: 0,
        },
        {
          question: "नाज़ी जर्मनी की आधिकारिक गुप्त पुलिस का क्या नाम था?",
          options: ["गेस्टापो", "एसएस", "सांट्राज", "पोलिसी"],
          answer: 0,
        },
        // Continue adding remaining questions in the same format for total 50 questions.
      ],
    },
    // Additional levels can be added here (Level 2, Level 3, etc.)
  ];
  
  let currentLevel = 0;
  let currentQuestion = 0;
  let correctAnswers = 0;
  let wrongAnswers = 0;
  
  function loadQuestion() {
    const currentData = levels[currentLevel].questions[currentQuestion];
    document.querySelector(".question").textContent = currentData.question;
    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
      option.textContent = currentData.options[index];
      option.classList.remove("correct", "wrong");
      option.disabled = false;
    });
  
    document.getElementById("level").textContent = currentLevel + 1;
    document.getElementById("question-number").textContent = currentQuestion + 1;
    document.getElementById("next").style.display = "none";
  }
  
  function selectOption(selectedIndex) {
    const options = document.querySelectorAll(".option");
    const correctIndex = levels[currentLevel].questions[currentQuestion].answer;
    options.forEach((option, index) => {
      option.disabled = true;
      if (index === correctIndex) {
        option.classList.add("correct");
      } else {
        option.classList.add("wrong");
      }
    });
  
    if (selectedIndex === correctIndex) {
      correctAnswers++;
    } else {
      wrongAnswers++;
    }
  
    document.getElementById("next").style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < 50) {
      loadQuestion();
    } else {
      if (currentLevel < 9) {
        currentLevel++;
        currentQuestion = 0;
        loadQuestion();
      } else {
        showResult();
      }
    }
  }
  
  function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("summary").textContent = `Correct Answers: ${correctAnswers}, Wrong Answers: ${wrongAnswers}`;
  }
  
  function restartQuiz() {
    currentLevel = 0;
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    document.getElementById("result").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
  }
  
  document.addEventListener("DOMContentLoaded", loadQuestion);
  