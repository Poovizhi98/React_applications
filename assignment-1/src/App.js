import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

    const [addUsersList, setAddUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setAddUsersList(prevState=>{
          return [...prevState, { name: uName, age: uAge }]
        })
    }

    return (
      <div>
        <AddUser onAddUsers={addUserHandler}/>
        <UsersList users={addUsersList}/>
      </div>
    );
}

export default App;
