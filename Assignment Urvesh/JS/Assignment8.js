// user profile update function

function updateCity(user, newCity, profession) {
    return {
        ...user,
        city: newCity,
        profession: profession
    };
}


let user = { name: "Urvesh", age: 21, city: "Bharuch" };

let updatedUser = updateCity(user, "Vadodara", "Developer");

console.log(user);        
 
console.log(updatedUser);  