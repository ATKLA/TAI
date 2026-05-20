// === ESTADO DE LA APLICACIÓN ===
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let allQuestions = [];
let currentExam = null;

// === ELEMENTOS DEL DOM ===
const examSelector = document.getElementById('exam-selector');
const quizSection = document.getElementById('quiz-section');
const questionWrapper = document.getElementById('question-wrapper');
const summarySection = document.getElementById('summary');
const quizTitle = document.getElementById('quiz-title');
const quizProgress = document.getElementById('quiz-progress');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const backToSelectorBtn = document.getElementById('back-to-selector-btn');
const currentScoreEl = document.getElementById('current-score');
const totalQuestionsEl = document.getElementById('total-questions');
const finalScoreEl = document.getElementById('final-score');
const correctCountEl = document.getElementById('correct-count');
const questionCountEl = document.getElementById('question-count');
const reviewBtn = document.getElementById('review-btn');
const restartFinalBtn = document.getElementById('restart-final-btn');

// === SELECCIÓN DE EXAMEN ===
document.querySelectorAll('.exam-option').forEach(button => {
    button.addEventListener('click', (e) => {
        const examId = e.target.dataset.exam;
        startExam(examId);
    });
});

function startExam(examId) {
    currentExam = examId;
    const examData = examenes[examId];
    
    if (!examData) {
        alert('Examen no disponible');
        return;
    }
    
    // Inicializar quiz con los datos del examen
    allQuestions = examData.preguntas;
    
    // Resetear estado
    currentQuestionIndex = 0;
    userAnswers = new Array(allQuestions.length).fill(null);
    score = 0;
    
    // Actualizar UI
    quizTitle.textContent = examData.titulo;
    totalQuestionsEl.textContent = `Total: ${allQuestions.length}`;
    
    // Ocultar selector y mostrar quiz
    examSelector.style.display = 'none';
    quizSection.style.display = 'block';
    
    // Mostrar primera pregunta
    renderQuestion();
}

// === VOLVER AL SELECTOR ===
backToSelectorBtn.addEventListener('click', () => {
    if (confirm('¿Seguro que quieres cambiar de examen? Se perderá el progreso actual.')) {
        resetToSelector();
    }
});

function resetToSelector() {
    examSelector.style.display = 'block';
    quizSection.style.display = 'none';
    summarySection.style.display = 'none';
    questionWrapper.style.display = 'block';
    
    currentExam = null;
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    allQuestions = [];
}

// === RENDERIZAR PREGUNTA ===
function renderQuestion() {
    const question = allQuestions[currentQuestionIndex];
    
    // Actualizar header
    quizProgress.textContent = `Pregunta ${currentQuestionIndex + 1} de ${allQuestions.length}`;
    currentScoreEl.textContent = `Aciertos: ${score}`;
    
    // Renderizar pregunta
    questionText.textContent = question.pregunta;
    
    // Renderizar opciones
    optionsList.innerHTML = '';
    question.opciones.forEach((opcion, index) => {
        const li = document.createElement('li');
        li.className = 'option-item';
        
        const button = document.createElement('button');
        button.className = 'option-btn';
        
        const isAnswered = userAnswers[currentQuestionIndex] !== null;
        const isSelected = userAnswers[currentQuestionIndex] === index;
        const isCorrect = index === question.correcta;
        
        // Deshabilitar si ya se respondió
        if (isAnswered) {
            button.disabled = true;
            if (isCorrect) {
                button.classList.add('correct');
            } else if (isSelected && !isCorrect) {
                button.classList.add('incorrect');
            }
        }
        
        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(97 + index)})</span>
            <span class="option-text">${opcion}</span>
        `;
        
        button.addEventListener('click', () => handleAnswer(index));
        
        li.appendChild(button);
        optionsList.appendChild(li);
    });
    
    // Actualizar botones de navegación
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === allQuestions.length - 1 ? 'Finalizar' : 'Siguiente';
}

// === MANEJAR RESPUESTA ===
function handleAnswer(selectedIndex) {
    const question = allQuestions[currentQuestionIndex];
    
    // Guardar respuesta
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    // Actualizar puntuación
    if (selectedIndex === question.correcta) {
        score++;
    }
    
    // Re-renderizar para mostrar feedback
    renderQuestion();
    
    // Auto-avanzar después de 1 segundo
    setTimeout(() => {
        if (currentQuestionIndex < allQuestions.length - 1) {
            nextQuestion();
        } else {
            showSummary();
        }
    }, 1000);
}

// === NAVEGACIÓN ===
function nextQuestion() {
    if (currentQuestionIndex < allQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        showSummary();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

// === MOSTRAR RESUMEN ===
function showSummary() {
    questionWrapper.style.display = 'none';
    summarySection.style.display = 'block';
    
    const percentage = Math.round((score / allQuestions.length) * 100);
    
    finalScoreEl.textContent = `${percentage}%`;
    correctCountEl.textContent = score;
    questionCountEl.textContent = allQuestions.length;
}

// === REVISAR RESPUESTAS ===
function reviewAnswers() {
    currentQuestionIndex = 0;
    summarySection.style.display = 'none';
    questionWrapper.style.display = 'block';
    renderQuestion();
}

// === EVENT LISTENERS ===
prevBtn.addEventListener('click', previousQuestion);
nextBtn.addEventListener('click', nextQuestion);
reviewBtn.addEventListener('click', reviewAnswers);
restartFinalBtn.addEventListener('click', resetToSelector);
