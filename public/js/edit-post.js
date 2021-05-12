async function editHandler(event) {
    event.preventDefault();
    // set variables for database columns
    const post_title = document.getElementById('post_title').value;
    const post_content = document.getElementById('post_content').value;
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
  
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_title,
        post_content,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert(response.statusText);
    }
};
  
document.querySelector('.editpost-form').addEventListener('submit', editHandler);