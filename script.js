// Function to open the signup modal
function openSignupModal() {
  document.getElementById("signupModal").style.display = "block";
}

// Function to close the signup modal
function closeSignupModal() {
  document.getElementById("signupModal").style.display = "none";
}

// Function to handle signup form submission
function handleSignup(event) {
  event.preventDefault();
  // Get user inputs
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Use AWS Cognito SDK to sign up the user
  const poolData = {
    UserPoolId: 'us-east-1_FvvKk1hnK',
    ClientId: '5sj4893c12ocp68r8o0q01glr6'
  };
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  const attributeList = [
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: 'email',
      Value: email
    })
    // You can add more attributes as needed
  ];

  userPool.signUp(username, password, attributeList, null, function (err, result) {
    if (err) {
      console.error("Error signing up:", err);
      return;
    }
    console.log("Signup successful. Result:", result);
    // Optionally, you can redirect the user to a confirmation page
  });
}

// Attach event listeners to sign-up buttons and login link
document.getElementById("signupButton1").addEventListener("click", openSignupModal);
document.getElementById("signupButton2").addEventListener("click", openSignupModal);
document.getElementById("loginLink").addEventListener("click", openSignupModal);

// ... Any other existing code ...
