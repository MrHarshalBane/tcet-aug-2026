// rec = ["ajay nagar", 23, "adarsh nagar"]
// console.log(rec);
rec = {
    "name": "ajay nagar",
    "age": 23,
    "address": {
        "area": "adarsh nagar",
        "city": "Mumbai",
        "state": "Maharashtra"
    },
    "subject": ["c", "java", "javascript"]
}

console.log("State: " + rec.address.state);
console.log("Name: " + rec["name"]);
console.log("Name: " + rec.name);
console.log("Subject: " + rec.subject[2]);

