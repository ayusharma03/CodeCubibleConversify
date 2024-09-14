document.addEventListener('DOMContentLoaded', function() {
    const blueText = document.querySelector('.blue');
    const agentNameInput = document.getElementById('agentName');

    blueText.addEventListener('click', function() {
        agentNameInput.focus();
    });
});