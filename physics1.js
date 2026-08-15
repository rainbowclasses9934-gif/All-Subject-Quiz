// फ़ाइल का नाम: physics1.js (अध्याय 1 से 5)
window.quizDatabase = window.quizDatabase || {};
window.quizDatabase[1] = window.quizDatabase[1] || {};
for(let i=1; i<=5; i++) window.quizDatabase[1]["ch_"+i] = window.quizDatabase[1]["ch_"+i] || {};

// 👇 यहाँ नीचे अपने सवालों का कोड (SETs) पेस्ट करें 👇
window.quizDatabase[1]["ch_1"]["set_1"] = [
    { 
        question: "विद्युत आवेश का SI मात्रक क्या है?", 
        options: ["वोल्ट", "कूलॉम", "एम्पियर", "ओम"], 
        correct: 1 
    },
    { 
        question: "इलेक्ट्रॉन पर कितना आवेश होता है?", 
        options: ["1.6 × 10^-19 C", "9.1 × 10^-31 C", "1.6 × 10^19 C", "शून्य"], 
        correct: 0 
    }
];
