// trigger for hamburger side nav menu
const burgerMenu = document.getElementById('#mobile-nav');

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, burgerMenu)
})

//tigger for login modal
const modal = document.getElementById('#modal1');

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, modal)
})

// // DOM for modal login button
// const loginHandler = async (event) => {
//   event.preventDefault();
  
//   // variables for modal input data
//   const email = document.querySelector('#login-email').value.trim();
//   const password = document.querySelector('#login-password').value.trim();
//   if (email && password) {
//     // POST request to the /api/users/login
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     await response.json();
//     if (response.ok) {
//       // If validated > dashboard
//       console.log("button click");
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// document.querySelector('#login-form').addEventListener('submit', loginHandler);

// // DOM for logout

// const logout = async () => {
//   const response = await fetch('/api/users/logout', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace('/logout');
//   } else {
//     alert(response.statusText);
//   }
// };


// document.querySelector('#logout').addEventListener('click', logout);
