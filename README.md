# Front-end

MVP

---> Displaying data in cards: both user types to swipe right or left (or tap a check or x button) when they see a profile page or job posting/company page


"" from document

- Ability to easily edit / update profiles and job listing
- Ability to delete items
- Ability for both user types to swipe right or left (or tap a check or x button) when they see a profile page or job posting/company page.
- A page to view your matches. ""


1. functional components and used events in application to add dynamic functionality to app
2.  state and props, usage of useState and useEffect hooks, used Array methods to dynamically render HTML elements
3.  GET requests using either Axios or Fetch to display 3rd party data on a deployed page. Route management properly installed and used to show top level pages as well as nested views where necessary


EndPoints

NEED TO INCLUDE USEEFFECT 

// Register a new user: jobSeeker sign up 
'/api/auth/register' // POST

// Login a user
'/api/auth/login' // POST


--> This shows the unique admin profile, needs to be dynamic 
:need to put this in APP???? axios get request and pass props down to companyProfile 


// getAdmin Profile by admin id
'/api/admins/:id' // (Authenticated); // GET


// Create a company through an admin profile
'/api/admins/:id/add-company' // POST


// Register a new admin
'/api/auth/register-admin' // POST


// Login an admin
'/api/auth/login-admin' // POST

// Get a list of all admins
'/api/admins' // (Authenticated); // GET

// Get all users
'/api/users' // (Authenticated) // GET


// Get user profile by user id
'/api/users/:id' // (Authenticated) // GET