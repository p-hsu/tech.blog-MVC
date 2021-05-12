async function editHandler(event) {
    event.preventDefault();
    // set variables for database columns
    const post_title = document.querySelector('#post_title').value;
    const post_content = document.querySelector('#post_content').value;
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
      document.location.replace(`/posts/${id}`);
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.editpost-btn').addEventListener('submit', editHandler);