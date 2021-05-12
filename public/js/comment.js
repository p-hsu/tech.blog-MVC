// DOM for adding comment button
const commentHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.getElementById('comment_content').value;

    console.log(comment_content);
    // get post id from url
    const url = window.location.pathname;
    const post_id = url.substring(url.lastIndexOf('/') + 1);

    if (comment_content) {
        const response = await fetch(`/api/comments`, { 
            method: 'POST',
            body: JSON.stringify({post_id, comment_content}),
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
  
document.querySelector('.comment-form').addEventListener('submit', commentHandler)