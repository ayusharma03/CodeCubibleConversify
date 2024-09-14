document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agent-form');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const nextBtn = document.getElementById('nextBtn');
    const addQuestionBtn = document.getElementById('addQuestionBtn');

    nextBtn.addEventListener('click', function() {
        // Basic validation
        const requiredFields = step1.querySelectorAll('[required]');
        let isValid = true;
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        if (isValid) {
            step1.style.display = 'none';
            step2.style.display = 'block';
        }
    });

    addQuestionBtn.addEventListener('click', function() {
        const questionsArea = document.getElementById('specifyQuestions');
        questionsArea.value += questionsArea.value ? '\n' : '';
        questionsArea.value += '- ';
        questionsArea.focus();
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted');
        // You can add code here to handle the form submission
    });
});