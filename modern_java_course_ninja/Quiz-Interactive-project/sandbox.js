const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    

    // check answers
    // whe pass 2 arguments answer(to check correct or incorrect)
    // index(to compare position with correctAnswer array because positions of array is always 0)
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // Window object (global object)
    // scroll back to top
    scroll(0,0)

    // Show Result on Page
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none')
});
