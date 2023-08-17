const userComments = document.getElementById('user-input');
const commentSubmitBtn = document.getElementById('comment-submit-btn');
// const userInput = 

commentSubmitBtn.addEventListener('click', async function() {
    try {
        const comment = userComments.value;
        const response = await fetch ('/api/comment', {
        method: "POST",
        body: JSON.stringify({
            comment,
        }),
        headers: {
            'Content-Type': 'application/json', 
        },
    });
    console.log(comments)
    if(response.ok) {
        window.location.href = '/voting';
    } else {
        const errorMessage = await response.text();
        console.log(errorMessage);
    }
    } catch (error) {
        console.error("error", error);
    }
});