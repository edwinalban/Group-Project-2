const userComments = document.getElementById('#user-input');
const commentSubmitBtn = document.getElementById('#comment-submit-btn');

commentSubmitBtn.addEventListener('click', async function() {
    try {
    const comments = await fetch ('/voting', {
        mothod: "POST",
        headers: {
            'Content-Type': 'application/json', 
        },
    });
    if(response.ok) {
        window.location.href = '/voting';
    } else {
        const errorMessage = await response.text();
        console.log(errorMessage);
    }
    } catch (error) {
        console.error("error");
    }
});