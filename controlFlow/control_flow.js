let userRole = "admin";
let accessLevel;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;

let isLoggedIn = true;
let userMessage;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);