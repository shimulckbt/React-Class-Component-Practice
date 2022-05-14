import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from './AddUser.module.css';

const AddUser = (props) => {
   const [userName, setUserName] = useState('');
   const [age, setAge] = useState('');
   const submitHandler = (event) => {
      event.preventDefault();

      console.log(userName, age);
   };

   const userNameChangeHandler = (event) => {
      setUserName(event.target.value);
   };

   const ageeChangeHandler = (event) => {
      setAge(event.target.value);
   };

   return (
      <Card className={classes.input}>
         <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={userNameChangeHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" onChange={ageeChangeHandler} />
            <Button type="submit">Add User</Button>
         </form>

         <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={userNameChangeHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" onChange={ageeChangeHandler} />
            <Button type="submit">Add User</Button>
         </form>
      </Card>
   );
};

export default AddUser;