let currentQuestion = 0;
let score = 0;

const allQuestions = {

    sport: [

    {
        question: "كم عدد لاعبي فريق كرة القدم داخل الملعب؟",
        options: ["9", "10", "11", "12"],
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
        question: "من فاز بكأس العالم 2018؟",
        options: ["البرازيل", "ألمانيا", "فرنسا", "الأرجنتين"],
        correct: 2,
        level: "متوسط"
    },
    {
        question: "كم عدد بطولات ريال مدريد في دوري أبطال أوروبا حتى 2023؟",
        options: ["12", "13", "14", "15"],
        correct: 2,
        level: "متوسط"
    },

    {
        question: "من هو الهداف التاريخي لكأس العالم؟",
        options: ["رونالدو البرازيلي", "ميسي", "ميروسلاف كلوزه", "بيليه"],
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
        question: "ما هي أول سورة في القرآن الكريم؟",
        options: ["البقرة", "الفاتحة", "الإخلاص", "الناس"],
        correct: 1,
        level: "سهل"
    },

    {
        question: "كم عدد الصلوات المفروضة في اليوم؟",
        options: ["3", "4", "5", "6"],
        correct: 2,
        level: "متوسط"
    },
    {
        question: "في أي شهر يصوم المسلمون؟",
        options: ["محرم", "رجب", "شعبان", "رمضان"],
        correct: 3,
        level: "متوسط"
    },

    {
        question: "كم عدد آيات سورة البقرة؟",
        options: ["276", "286", "296", "306"],
        correct: 1,
        level: "صعب"
    },
    {
        question: "من هو النبي الذي ابتلعه الحوت؟",
        options: ["موسى عليه السلام", "يونس عليه السلام", "إبراهيم عليه السلام", "نوح عليه السلام"],
        correct: 1,
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
        question: "ما هي أسرع حيوان بري في العالم؟",
        options: ["الأسد", "الفهد", "النمر", "الغزال"],
        correct: 1,
        level: "صعب"
    },
    {
        question: "كم عدد عظام جسم الإنسان البالغ تقريباً؟",
        options: ["198", "206", "212", "220"],
        correct: 1,
        level: "صعب"
    }

],


    geo: [

    {
        question: "ما هي عاصمة فرنسا؟",
        options: ["روما", "مدريد", "باريس", "برلين"],
        correct: 2,
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
        question: "ما هي أكبر دولة في العالم من حيث المساحة؟",
        options: ["الصين", "أمريكا", "روسيا", "كندا"],
        correct: 2,
        level: "متوسط"
    },

    {
        question: "ما هو البحر الذي يفصل بين السعودية ومصر؟",
        options: ["البحر الأسود", "البحر الأحمر", "البحر المتوسط", "بحر العرب"],
        correct: 1,
        level: "صعب"
    },
    {
        question: "ما هي عاصمة أستراليا؟",
        options: ["سيدني", "ملبورن", "كانبيرا", "بيرث"],
        correct: 2,
        level: "صعب"
    }

],



};

const quizType = localStorage.getItem("quizType");
const questions = allQuestions[quizType];

document.getElementById("category-name").innerText = "القسم: " + quizType;

function loadQuestion(){
    document.getElementById("question").innerText =
        questions[currentQuestion].question;

    document.getElementById("level").innerText =
        "المستوى: " + questions[currentQuestion].level;

    let buttons = document.querySelectorAll(".options button");

    buttons.forEach((btn, index) => {
        btn.innerText = questions[currentQuestion].options[index];
    });
}

function checkAnswer(index){

    if(index === questions[currentQuestion].correct){
        score++;
        document.getElementById("result").innerText = "إجابة صحيحة ✅";
    } else {
        document.getElementById("result").innerText = "إجابة خاطئة ❌";
    }

    currentQuestion++;

    if(currentQuestion < questions.length){
        setTimeout(() => {
            document.getElementById("result").innerText = "";
            loadQuestion();
        }, 1000);
    } else {
        setTimeout(() => {
            document.querySelector(".quiz-box").innerHTML =
            `<h2>انتهى الاختبار!</h2>
             <p>درجتك: ${score} / ${questions.length}</p>
             <button onclick="window.location.href='index.html'">
             الرجوع للقائمة الرئيسية
             </button>`;
        }, 1000);
    }
}

loadQuestion();
