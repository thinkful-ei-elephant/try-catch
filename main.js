const db = [];


function addUserToDatabase(username) {
    if (!username || username.length < 3) {
      throw new Error('Must provide a username greater than 2 chars');
    }
    
    if (findUserInDatabase(username)) {
      throw new Error('Username already exists. Choose another.');
    }
    
    // All validations passed
    saveUserToDatabase(username);
    console.log('Successfully added person to database.');
  }
    
  function findUserInDatabase(username){
      return db.find(user=>user===username);
  }

  function saveUserToDatabase(username){
      db.push(username);
  }

  try {
    addUserToDatabase('John');  // Successful
    addUserToDatabase('John');    // Will throw error and be caught below   
    addUserToDatabase();        // Will throw error and be caught below
  } catch(e) {
      console.log('you are now in the catch block');
    console.error(`${e.name}: ${e.message}`);
  }
  console.log(db)