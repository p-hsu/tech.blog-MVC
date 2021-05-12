// DOM for adding comment button
const commentHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('#comment_content').value;
    // get post id from url
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);

    if (comment_content) {
        const response = await fetch(`/api/comments`, { 
            method: 'POST',
            body: JSON.stringify({id, comment_content}),
            headers: {
                'Content-Type': 'application/json', 
            },
        });
        console.log(response)

        if (response.ok) {
            window.location.reload();
        } else {
            alert('Uhoh - something went wrong.')
        }
        } else {
            alert('The field cannot be empty.')
        }
};
  
document.querySelector('.comment-btn').addEventListener('submit', commentHandler)