const responses = {
    "What are the symptoms of COVID-19?": "Common symptoms of COVID-19 include fever, cough, and shortness of breath.",
    "How can I protect myself from COVID-19?": "To protect yourself from COVID-19, practice good hand hygiene, wear a mask, maintain physical distance, and get vaccinated.",
    "Where can I get tested for COVID-19?": "You can get tested for COVID-19 at local testing centers, clinics, and hospitals. Check your local health department's website for testing locations.",
    "What are the COVID-19 vaccination guidelines?": "COVID-19 vaccination guidelines vary by location and age group. It's best to consult your local health authorities or healthcare provider for the most up-to-date information.",
    "How can I prevent the flu?": "To prevent the flu, consider getting an annual flu vaccine, practice good handwashing, avoid close contact with sick individuals, and maintain a healthy lifestyle.",
    "What are the best practices for handwashing?": "The best practices for handwashing include using soap and water, scrubbing for at least 20 seconds, and cleaning all parts of your hands, including between your fingers and under your nails.",
    "How can I boost my immune system?": "You can boost your immune system by eating a healthy diet rich in fruits and vegetables, getting regular exercise, managing stress, getting enough sleep, and staying hydrated.",
    "How can I support healthcare workers during the pandemic?": "Support healthcare workers by following public health guidelines, donating personal protective equipment (PPE), and expressing gratitude for their hard work.",
    "Are there any mental health resources for frontline workers?": "Yes, there are mental health resources available for frontline workers. Contact your employer or local healthcare facility for information on available resources.",
    "What initiatives is the hospital chain taking to support healthcare workers?": "Hospitals may have various initiatives to support healthcare workers, such as providing PPE, mental health services, and hazard pay. It's best to contact your hospital's HR department for details.",
    "What are the latest advancements in cancer treatment?": "The latest advancements in cancer treatment include immunotherapy, targeted therapies, and precision medicine. Consult with an oncologist for specific information.",
    "Tell me about clinical trials for diabetes treatment.": "Clinical trials for diabetes treatment are ongoing to test new medications and therapies. You can search for clinical trials online or consult with your healthcare provider.",
    "Are there any breakthroughs in Alzheimer's disease research?": "Alzheimer's disease research continues, with promising developments in early diagnosis and potential treatments. Stay updated through reputable Alzheimer's associations and research institutions.",
    "How can I schedule a telemedicine appointment?": "You can schedule a telemedicine appointment with your healthcare provider by contacting their office and requesting a virtual appointment.",
    "What types of medical conditions can be treated via telehealth?": "Telehealth can be used to address a wide range of medical conditions, including routine check-ups, minor illnesses, mental health concerns, and chronic disease management.",
    "Is my insurance coverage applicable for virtual healthcare?": "Insurance coverage for virtual healthcare varies by provider and plan. Contact your insurance company or review your policy to determine if telehealth services are covered.",
    "What is a healthy diet for weight loss?": "A healthy diet for weight loss includes a balanced intake of fruits, vegetables, lean proteins, whole grains, and limited processed foods. Consult a nutritionist for personalized guidance.",
    "How much exercise should I get each day?": "The recommended daily exercise varies but generally includes at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity per week, along with strength training exercises.",
    "What is the recommended daily water intake?": "The recommended daily water intake varies by individual factors but is generally around 8-10 cups (64-80 ounces) of water per day.",
    "What are the side effects of [specific medication]?": "The side effects of specific medications vary widely. Consult the medication's package insert or your healthcare provider for information on its side effects.",
    "Can I take [medication] while pregnant?": "The safety of taking medication during pregnancy depends on the medication and individual circumstances. Consult your healthcare provider for personalized advice.",
    "How do I properly store my medications?": "Medication storage instructions can vary. Generally, store medications in a cool, dry place away from direct sunlight and out of reach of children.",
    "How can I manage stress and anxiety?": "Managing stress and anxiety can involve techniques like deep breathing, meditation, exercise, therapy, and stress-reduction strategies. Consult a mental health professional for guidance.",
    "What are the signs of depression?": "Signs of depression may include persistent sadness, changes in appetite or sleep, loss of interest in activities, fatigue, and difficulty concentrating. Consult a mental health expert for a proper evaluation.",
    "Where can I find a mental health counselor?": "You can find a mental health counselor through your healthcare provider, insurance company, local mental health organizations, or online directories.",
    "What are the common symptoms of pregnancy?": "Common symptoms of pregnancy can include missed periods, nausea, breast tenderness, fatigue, and frequent urination. Consult a healthcare provider for confirmation and guidance.",
    "How do I perform a breast self-exam?": "Performing a breast self-exam involves visually inspecting and feeling your breasts for lumps or changes. Consult a healthcare provider for a demonstration and guidance.",
    "What are the options for birth control?": "Birth control options include hormonal methods like pills and injections, barrier methods like condoms, intrauterine devices (IUDs), and permanent options like sterilization. Consult a healthcare provider for advice.",
    "What vaccines does my child need?": "Childhood vaccination schedules vary by country and region. Consult your child's pediatrician or a local health authority for the recommended vaccines for your child's age.",
    "How can I soothe a colicky baby?": "Soothing a colicky baby may involve gentle rocking, swaddling, using white noise, offering a pacifier, and ensuring the baby is well-fed and burped. Consult a pediatrician for personalized advice.",
    "What are the signs of childhood allergies?": "Signs of childhood allergies can include sneezing, runny nose, itchy or watery eyes, rashes, and respiratory symptoms. Consult a pediatrician for diagnosis and management.",
};
const categoryToQuestions = {
    "Category 1: COVID-19 Related": [
        "What are the symptoms of COVID-19?",
        "How can I protect myself from COVID-19?",
        "Where can I get tested for COVID-19?",
        "What are the COVID-19 vaccination guidelines?"
    ],
    "Category 2: Preventative/Hygiene Behaviors": [
        "How can I prevent the flu?",
        "What are the best practices for handwashing?",
        "How can I boost my immune system?"
    ],
    "Category 3: Supporting Frontline Workers": [
        "How can I support healthcare workers during the pandemic?",
        "Are there any mental health resources for frontline workers?",
        "What initiatives is the hospital chain taking to support healthcare workers?"
    ],
    "Category 4: Treatment and Diagnosis Development": [
        "What are the latest advancements in cancer treatment?",
        "Tell me about clinical trials for diabetes treatment.",
        "Are there any breakthroughs in Alzheimer's disease research?"
    ],
    "Category 5: Virtual Healthcare": [
        "How can I schedule a telemedicine appointment?",
        "What types of medical conditions can be treated via telehealth?",
        "Is my insurance coverage applicable for virtual healthcare?"
    ],
    "Category 6: General Health Information": [
        "What is a healthy diet for weight loss?",
        "How much exercise should I get each day?",
        "What is the recommended daily water intake?"
    ],
    "Category 7: Medication Information": [
        "What are the side effects of [specific medication]?",
        "Can I take [medication] while pregnant?",
        "How do I properly store my medications?"
    ],
    "Category 8: Mental Health": [
        "How can I manage stress and anxiety?",
        "What are the signs of depression?",
        "Where can I find a mental health counselor?"
    ],
    "Category 9: Women's Health": [
        "What are the common symptoms of pregnancy?",
        "How do I perform a breast self-exam?",
        "What are the options for birth control?"
    ],
    "Category 10: Child Health": [
        "What vaccines does my child need?",
        "How can I soothe a colicky baby?",
        "What are the signs of childhood allergies?"
    ]
};
// HTML elements
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const categoryButtons = document.querySelectorAll('category-link');
const faqContainer = document.getElementById('category-faqs');
const categoryLinks = document.querySelectorAll('.category-link');
const categorySuggestions = document.getElementById('category-suggestions');


// Event listener for category links
categoryButtons.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = link.getAttribute('data-category');
        displayCategoryFAQs(category);
    });
});

// Function to display FAQs for the selected category
function displayCategoryFAQs(category) {
    faqContainer.innerHTML = ''; // Clear existing FAQs

    if (category in categoryToQuestions) {
        const questions = categoryToQuestions[category];
        questions.forEach((question) => {
            const faqDiv = document.createElement('div');
            faqDiv.className = 'faq';
            faqDiv.innerText = question;
            faqContainer.appendChild(faqDiv);
        });
    }
}

// Function to append messages to the chat log
function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender === 'User' ? 'user' : 'bot'}`;
    messageDiv.innerText = message;
    chatLog.appendChild(messageDiv);
}

// Event listeners for user input
function displayCategoryFAQs(category) {
    faqContainer.innerHTML = ''; // Clear existing FAQs

    if (category in categoryToQuestions) {
        const questions = categoryToQuestions[category];
        questions.forEach((question) => {
            const faqDiv = document.createElement('div');
            faqDiv.className = 'faq';
            faqDiv.innerText = question;
            faqContainer.appendChild(faqDiv);
        });
    }
}
function displayCategorySuggestions(category) {
    categorySuggestions.innerHTML = ''; // Clear existing suggestions

    if (category in categoryToQuestions) {
        const questions = categoryToQuestions[category];
        questions.forEach((question) => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.className = 'suggestion';
            suggestionDiv.innerText = question;
            suggestionDiv.addEventListener('click', () => {
                // When a question is clicked, you can handle it here, e.g., send it to the chatbot
                userInput.value = question;
                // Optionally, you can also trigger the chatbot to respond to the selected question
                handleUserInput();
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
// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    appendMessage('User', userMessage);
    userInput.value = '';

    const response = responses[userMessage];
    if (response) {
        setTimeout(() => {
            appendMessage('Bot', response);
        }, 500); // Simulate bot response delay
    } else {
        appendMessage('Bot', "I'm sorry, I don't have information on that topic.");
    }
}

// Event listener for category buttons
categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        displayCategoryFAQs(category);
    });
});

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});
/*
// HTML elements
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const categoryButtons = document.querySelectorAll('.category-button');
const faqContainer = document.getE
// Questions for each category


// Function to display FAQs for the selected category

// Function to append messages to the chat log
function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender === 'User' ? 'user' : 'bot'}`;
    messageDiv.innerText = message;
    chatLog.appendChild(messageDiv);
}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    appendMessage('User', userMessage);
    userInput.value = '';

    const response = responses[userMessage];
    if (response) {
        setTimeout(() => {
            appendMessage('Bot', response);
        }, 500); // Simulate bot response delay
    } else {
        appendMessage('Bot', "I'm sorry, I don't have information on that topic.");
    }
}

// Event listeners for user input
sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

*/