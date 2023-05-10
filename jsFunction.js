function artistAge() {
    // User enter the age of their favorite artist
    var age = prompt("Can you please enter the age of your favorite artist?");
  
    // This will be the output if the age is less than 25
    if (age < 25) {
      console.log("They’re " + age + " years old and they’re younger than Google");
    }
    // This will be the output if the age is equal to 25
    else if (age === "25") {
      console.log("They’re " + age + " years old and they’re as old as Google");
    }
    // This will be the output if the age greater than 25
    else {
      alert("They’re " + age + " years old and they’re older than Google");
    }
  }
  
  // Call the artistAge function
  artistAge();
  