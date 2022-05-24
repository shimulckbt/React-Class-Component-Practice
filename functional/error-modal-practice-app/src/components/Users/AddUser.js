import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpepers/Wrapper";

import classes from './AddUser.module.css';

const AddUser = (props) => {
   const [userName, setUserName] = useState('');
   const [age, setAge] = useState('');

   const [error, setError] = useState();

   const submitHandler = (event) => {
      event.preventDefault();
      if (userName.trim().length === 0 || age.trim().length === 0) {
         setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and proper age'
         });
         return;
      }
      if (+age < 1) {
         setError({
            title: 'Invalid age',
            message: 'Please enter a valid age'
         });
         return;
      }
      // console.log(error);
      props.onAddUser(userName, age);
      setUserName('');
      setAge('');
      // console.log([error]);
   };

   const userNameChangeHandler = (event) => {
      setUserName(event.target.value);
   };

   const ageeChangeHandler = (event) => {
      setAge(event.target.value);
   };

   const errorHandler = () => {
      setError(null);
   }

   return (
      <>
         {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
         <Card className={classes.input}>
            <form onSubmit={submitHandler}>
               <label htmlFor="username">Username</label>
               <input id="username" type="text" value={userName} onChange={userNameChangeHandler} />
               <label htmlFor="age">Age (Years)</label>
               <input id="age" type="number" value={age} onChange={ageeChangeHandler} />
               <Button type="submit">Add User</Button>
            </form>
         </Card>
      </>
   );
};

export default AddUser;