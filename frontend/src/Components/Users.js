import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";
//import { getUsers } from "../../../backend/controller";

// const users = [
//     {
//         id: 1,
//         name: 'Udara'
//     },
//     {
//         id:2,
//         name:'Madara'
//     }
    
// ]
const Users = () => {
    //connect backend
    const [users, setUsers] = useState([]);
    const [submitted, setsubmitted ] = useState(false);
    const [selectedUser, setselectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    //component did mount = useEffect = lord the data
    useEffect( () => {
        getUsers();
    }, []);
    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
             .then(response => {
                setUsers(response.data?.response || []);
                console.log(response.data.response);
             })
             .catch(error => {
                console.log("Axios Error : ", error);
             });
    }
    //.........
    const addUser = (data) => {
        setsubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:3001/api/addUser', payload)
             .then( () => {
                getUsers();
                setsubmitted(false);
                isEdit(false); 
             })
             .catch(error => {
                console.log("Axios Error : ", error);
             });
    }
    //.......
    const updateUser = (data) => {
        setsubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.put('http://localhost:3001/api/updateUser', payload)
             .then( () => {
                getUsers();
                setsubmitted(false);
                isEdit(false); 
             })
             .catch(error => {
                console.log("Axios Error : ", error);
             });
    }
    //.......
    const deleteUser = (data) => {
        Axios.delete('http://localhost:3001/api/deleteUser', data)
             .then( () => {
                getUsers();
             })
             .catch(error => {
                console.log("Axios Error : ", error);
             });
    }

//..........
    return(
        <Box
           sx={{
             width: 'calc(100% - 100px)',//give 100% and reduce 100px broth side
             margin: 'auto',
             marginTop: '100px' 
           }}
        >
            <UserForm 
              addUser={addUser} 
              updateUser={updateUser}
              submitted={submitted} 
              selectedUser={selectedUser}
              isEdit={isEdit}

            />
            {/* passed prop rows to users details */}
            <UsersTable 
               rows={users} 
               selectedUser={data => {
                  setselectedUser(data);
                  setIsEdit(true);
               }}
               deleteUser={data => window.confirm('Are you Sure?') && deleteUser(data)} 
            /> 
        </Box>
        
    )
}
export default Users;