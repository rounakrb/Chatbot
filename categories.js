// HTML elements
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const categoryButtons = document.querySelectorAll('category-link');
const faqContainer = document.getElementById('category-faqs');


// Questions for each category

const categoryToQuestions = {
    "COVID-19 Related": [
        "What are the symptoms of COVID-19?",
        "How can I protect myself from COVID-19?",
        "Where can I get tested for COVID-19?",
        "What are the COVID-19 vaccination guidelines?"
    ],
    "Preventative/Hygiene Behaviors": [
        "How can I prevent the flu?",
        "What are the best practices for handwashing?",
        "How can I boost my immune system?"
    ],
    "Supporting Frontline Workers": [
        "How can I support healthcare workers during the pandemic?",
        "Are there any mental health resources for frontline workers?",
        "What initiatives is the hospital chain taking to support healthcare workers?"
    ],
    "Treatment and Diagnosis Development": [
        "What are the latest advancements in cancer treatment?",
        "Tell me about clinical trials for diabetes treatment.",
        "Are there any breakthroughs in Alzheimer's disease research?"
    ],
    "Virtual Healthcare": [
        "How can I schedule a telemedicine appointment?",
        "What types of medical conditions can be treated via telehealth?",
        "Is my insurance coverage applicable for virtual healthcare?"
    ],
    "General Health Information": [
        "What is a healthy diet for weight loss?",
        "How much exercise should I get each day?",
        "What is the recommended daily water intake?"
    ],
    "Medication Information": [
        "What are the side effects of [specific medication]?",
        "Can I take [medication] while pregnant?",
        "How do I properly store my medications?"
    ],
    "Mental Health": [
        "How can I manage stress and anxiety?",
        "What are the signs of depression?",
        "Where can I find a mental health counselor?"
    ],
    "Women's Health": [
        "What are the common symptoms of pregnancy?",
        "How do I perform a breast self-exam?",
        "What are the options for birth control?"
    ],
    "Child Health": [
        "What vaccines does my child need?",
        "How can I soothe a colicky baby?",
        "What are the signs of childhood allergies?"
    ]
};

// Function to display suggested questions for a category
function displayCategorySuggestions(category) {
    categorySuggestions.innerHTML = ''; // Clear existing suggestions

    if (category in categoryToQuestions) {
        const questions = categoryToQuestions[category];
        questions.forEach((question) => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.className = 'suggestion';
            suggestionDiv.innerText = question;
            suggestionDiv.addEventListener('click', () => {
                userInput.value = question;
            });
            categorySuggestions.appendChild(suggestionDiv);
        });
    }
}

// Event listener for category links
categoryLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = link.getAttribute('data-category');
        displayCategorySuggestions(category);
    });
});
