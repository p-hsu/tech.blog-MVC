// DOM for modal login button
const loginHandler = async (event) => {
    event.preventDefault();
    
    // variables for modal input data
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    if (email && password) {
      // POST request to the /api/users/login
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });
    await response.json();
    if (response.ok) {
        // If validated > dashboard
        console.log(email, password);
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginHandler);
