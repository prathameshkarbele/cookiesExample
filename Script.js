// Define a function to set a cookie
function setCookie() {
    // Get the value of the name input field
    const name = document.getElementById("name").value;
  
    // Set a cookie with the name and an expiry date of one day from now
    document.cookie = `name=${name}; expires=${new Date(Date.now() + 86400000).toUTCString()}`;
  }
  
  // Define a function to get a cookie value by name
  function getCookie(name) {
    // Split the cookie string into an array of key-value pairs
    const cookies = document.cookie.split(";");
  
    // Loop through the cookies to find the one with the matching name
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
  
      // If the cookie name matches, return the value
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
  
    // If no matching cookie found, return null
    return null;
  }
  
  // Example usage: retrieve the name cookie value and display a greeting
  const name = getCookie("name");
  if (name) {
    const greeting = document.createElement("p");
    greeting.innerText = `Hello, ${name}!`;
    document.body.appendChild(greeting);
  }

//   This JavaScript code defines two functions - setCookie() and getCookie(name) - that are used to set and retrieve cookies, respectively. The setCookie() function gets the value of the name input field, and then sets a cookie with the name and an expiry date of one day from now. The getCookie(name) function accepts a name parameter, and returns the value of the cookie with that name, or null if no matching cookie is found.

// Finally, the code also includes an example usage that retrieves the value of the "name" cookie and displays a greeting containing the name.