let currentQuestion = 0;
let score = 0;

const allQuestions = {

    sport: [

    {
    question: "كم عدد لاعبي فريق كرة القدم داخل الملعب؟",
    options: ["9", "10", "11", "13"],
    correct: 2,
    level: "سهل"
    },
    {
    question: "كم مدة المباراة الرسمية بدون وقت إضافي؟",
    options: ["60 دقيقة", "80 دقيقة", "90 دقيقة", "100 دقيقة"],
    correct: 2,
    level: "سهل"
    },

    {
    question: "من هو أكثر لاعب تحقيقًا لجائزة الكرة الذهبية حتى 2023؟",
    options: ["كريستيانو رونالدو", "ميسي", "كرويف", "بلاتيني"],
    correct: 1,
    level: "متوسط"
},

    {
    question: "في أي دولة أُقيم كأس العالم 2022؟",
    options: ["الإمارات", "قطر", "روسيا", "البرازيل"],
    correct: 1,
    level: "متوسط"
},

    {
    question: "ما هو المنتخب الذي فاز بأول بطولة كأس عالم 1930؟",
    options: ["البرازيل", "الأرجنتين", "أوروغواي", "إيطاليا"],
    correct: 2,
    level: "صعب"
},
    {
        question: "في أي سنة أقيم أول كأس عالم لكرة القدم؟",
        options: ["1920", "1930", "1940", "1950"],
        correct: 1,
        level: "صعب"
    }

],


   islamic: [

    {
    question: "كم عدد أركان الإسلام؟",
    options: ["3", "4", "5", "6"],
    correct: 2,
    level: "سهل"
    },
    {
    question: "ما اسم زوجة فرعون التي آمنت بموسى عليه السلام؟",
    options: ["آسية", "مريم", "خديجة", "هاجر"],
    correct: 0,
    level: "سهل"
},

{
    question: "كم عدد الأنبياء الذين ذكروا في القرآن؟",
    options: ["20", "23", "25", "30"],
    correct: 2,
    level: "متوسط"
},
{
    question: "في أي سنة كانت غزوة بدر؟",
    options: ["1 هـ", "2 هـ", "3 هـ", "4 هـ"],
    correct: 1,
    level: "متوسط"
},

{
    question: "ما هي السورة التي لا تبدأ بالبسملة؟",
    options: ["الأنفال", "التوبة", "الفتح", "الأحزاب"],
    correct: 1,
    level: "صعب"
},
{
    question: "من هو الصحابي الملقب بسيف الله المسلول؟",
    options: ["أبو بكر", "عمر", "خالد بن الوليد", "علي"],
    correct: 2,
    level: "صعب"
}

],


   general: [

    {
    question: "ما هو أكبر كوكب في المجموعة الشمسية؟",
    options: ["الأرض", "المريخ", "المشتري", "زحل"],
    correct: 2,
    level: "سهل"
    },
    {
    question: "كم عدد قارات العالم؟",
    options: ["5", "6", "7", "8"],
    correct: 2,
    level: "سهل"
    },

    {
    question: "ما هو العنصر الكيميائي الذي رمزه O؟",
    options: ["الذهب", "الأكسجين", "الهيدروجين", "الفضة"],
    correct: 1,
    level: "متوسط"
    },
    {
    question: "من هو مخترع المصباح الكهربائي؟",
    options: ["أينشتاين", "نيوتن", "توماس إديسون", "غراهام بيل"],
    correct: 2,
    level: "متوسط"
    },

   {
    question: "ما اسم المجرة التي ينتمي إليها كوكب الأرض؟",
    options: ["درب التبانة", "أندروميدا", "المجرة الحلزونية", "الدرع"],
    correct: 0,
    level: "صعب"
},
{
    question: "كم عدد الكروموسومات في جسم الإنسان؟",
    options: ["42", "44", "46", "48"],
    correct: 2,
    level: "صعب"
}

],


    geo: [

{
    question: "ما هي أكبر قارة في العالم مساحةً؟",
    options: ["أفريقيا", "آسيا", "أوروبا", "أمريكا الشمالية"],
    correct: 1,
    level: "سهل"
},
    {
    question: "ما هو أطول نهر في العالم؟",
    options: ["الأمازون", "النيل", "الدانوب", "اليانغتسي"],
    correct: 1,
    level: "سهل"
    },

    {
    question: "في أي قارة تقع البرازيل؟",
    options: ["أوروبا", "آسيا", "أفريقيا", "أمريكا الجنوبية"],
    correct: 3,
    level: "متوسط"
    },

    {
    question: "ما هو أعلى جبل في العالم؟",
    options: ["كيليمنجارو", "إيفرست", "الألب", "الهيمالايا"],
    correct: 1,
    level: "متوسط"
},

    {
    question: "ما هو المضيق الذي يفصل بين آسيا وأمريكا الشمالية؟",
    options: ["هرمز", "جبل طارق", "بيرنغ", "ملقا"],
    correct: 2,
    level: "صعب"
},

{
    question: "كم عدد الدول العربية؟",
    options: ["20", "21", "22", "23"],
    correct: 2,
    level: "صعب"
}

],



};

const quizType = localStorage.getItem("quizType");
const questions = allQuestions[quizType];

let categoryNames = {
sport: "⚽ كورة",
islamic: "🕌 إسلامية",
general: "🧠 معلومات عامة",
geo: "🌍 جغرافيا"
};

document.getElementById("category-name").innerText =
"القسم: " + categoryNames[quizType];

function loadQuestion() {

document.getElementById("question").innerText =
questions[currentQuestion].question;

document.getElementById("level").innerText =
"المستوى: " + questions[currentQuestion].level;

let buttons = document.querySelectorAll(".options button");

buttons.forEach((btn, index) => {
btn.innerText = questions[currentQuestion].options[index];
btn.disabled = false;
});
}

function checkAnswer(index) {

let buttons = document.querySelectorAll(".options button");
buttons.forEach(btn => btn.disabled = true);

if (index === questions[currentQuestion].correct) {
score++;
document.getElementById("result").innerText = "إجابة صحيحة ✅";
document.getElementById("result").style.color = "#00ff99";
} else {
document.getElementById("result").innerText = "إجابة خاطئة ❌";
document.getElementById("result").style.color = "#ff4d4d";
}

currentQuestion++;

if (currentQuestion < questions.length) {
setTimeout(() => {
document.getElementById("result").innerText = "";
loadQuestion();
}, 1000);
} else {
setTimeout(() => {

let percentage = Math.round((score / questions.length) * 100);

document.querySelector(".quiz-box").innerHTML = `
<h2>انتهى الاختبار بشر كيف !؟</h2>
<p style="font-size:20px;">درجتك: ${score} / ${questions.length}</p>


<button onclick="window.location.href='index.html'"
style="margin-top:15px;padding:10px 20px;border-radius:8px;border:none;cursor:pointer;">
الرجوع للقائمة الرئيسية
</button>

<p style="margin-top:30px;font-size:14px;opacity:0.8;color:#ffd700;">
مع تحيات طلاب الكلية التقنية برجال ألمع
</p>

 `;

}, 1000);
    }
}

loadQuestion();
