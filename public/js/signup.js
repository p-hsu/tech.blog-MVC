const signupHandler = async (event) => {
  event.preventDefault();
  // set variables for columns in user table
  const first_name = document.querySelector('#signup_first_name').value.trim();
  const last_name = document.querySelector('#signup_last_name').value.trim();
  const user_name = document.querySelector('#signup_user_name').value.trim();
  const email = document.querySelector('#signup_email').value.trim();
  const password = document.querySelector('#signup_password').value.trim();
  
  if (first_name && last_name && user_name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, user_name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupHandler);