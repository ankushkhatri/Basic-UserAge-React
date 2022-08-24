import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
   const [enteredUsername, SetEnteredUsername] = useState("");
   const [enteredAge, SetEnteredAge] = useState("");
   const [error, setError] = useState();

   const addUserHandler = (event) => {
      event.preventDefault();

      if (
         enteredUsername.trim().length === 0 ||
         enteredAge.trim().length === 0
      ) {
         setError({
            title: "Invalid input",
            message: "Please enter a valid name and age (non-empty values)",
         });
         return;
      }
      if (enteredAge < 1) {
         setError({
            title: "Invalid age",
            message: "Please enter a valid age (non-empty values)",
         });
         return;
      }

      props.onAddUser(enteredUsername, enteredAge);

      // this will clear out the entries once the add button is clicked,
      //just add the value field as well in the input types for this to work
      SetEnteredUsername("");
      SetEnteredAge("");
   };

   const usernameChangeHandler = (event) => {
      SetEnteredUsername(event.target.value);
   };

   const ageChangeHandler = (event) => {
      SetEnteredAge(event.target.value);
   };

   const errorHandler = () => {
      setError(null)
   }

   return (
      <div>
         { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
         <Card className={classes.input}>
            {/*As this is a custom component we can't use classname, bcoz that is for only html tags, 
         to make this work check once in card.js props.classname is used */}
            <form onSubmit={addUserHandler}>
               <label htmlFor="username">Username</label>
               <input
                  id="username"
                  type="text"
                  value={enteredUsername}
                  onChange={usernameChangeHandler}
               />
               <label htmlFor="age">Age (Years)</label>
               <input
                  id="age"
                  type="number"
                  value={enteredAge}
                  onChange={ageChangeHandler}
               />
               <Button type="submit">Add User</Button>
            </form>
         </Card>
      </div>
   );
};

export default AddUser;
