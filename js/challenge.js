let count = 0;
let intervalId = null;
        const counterElement = document.getElementById('counter');

        intervalId = setInterval(() => {
            count += 1;
            counterElement.textContent = count; // Update the counter display
        },1000);

const minusTime = document.getElementById('minus');
minusTime.addEventListener('click', () => {
    count -= 1;
    counterElement.textContent = count;
})

const incrementTime = document.getElementById('plus');
incrementTime.addEventListener('click', ()=> {
    count+= 1;
    counterElement.textContent = count;
})

document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.getElementById('heart');
    hearts.addEventListener('click', () => {
        document.getElementById('list').innerHTML = "like at "+ (count);
    })
});

const pauses = document.getElementById('pause');
pauses.addEventListener('click', () => {
    if (intervalId !== null) {
        // Pause the counter
        clearInterval(intervalId);
        intervalId = null;

        // Disable all buttons except pause
        minusTime.disabled = true;
        incrementTime.disabled = true;
        hearts.disabled = true;

        // Change button label to "Resume"
        pauses.textContent = "Resume";
    } else {
        // Resume the counter
        intervalId = setInterval(() => {
            count += 1;
            counterElement.textContent = count;
        }, 1000);

        // Enable all buttons
        minusTime.disabled = false;
        incrementTime.disabled = false;
        hearts.disabled = false;

        // Change button label to "Pause"
        pauses.textContent = "Pause";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('submit')
    const comInput = document.getElementById('comment-input')
    const commentsList = document.getElementById('list');

    commentForm.addEventListener('click', (event) => {
        event.preventDefault();
        const commentText = comInput.value.trim();

        if (comInput) {
            const commentItem = document.createElement('li');
            commentItem.textContent = commentText;
            commentsList.appendChild(commentItem);

            comInput.value = ''; // Clear the input field
        }
    });
});
