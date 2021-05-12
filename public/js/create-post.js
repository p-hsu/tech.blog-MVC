const createPostHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#post_title').value;
    const post_content = document.querySelector('#post_content').value;
  
  if (post_title && post_content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({post_title, post_content}),
      headers: {
        'Content-Type': 'application/json', 
  
      },
      
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Uh oh - something went wrong.')
    }
  } else {
    alert('A new post requires both title and content')
  }
  };
  
  
  document.querySelector('.submitnew-btn').addEventListener('submit', createPostHandler)