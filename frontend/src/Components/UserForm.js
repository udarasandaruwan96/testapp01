import {Button, Grid, Input, Typography} from "@mui/material";
import { useEffect, useState } from "react";// mange state in use hook can access react life cycle

//props used to data transform parent to child or child to parent
const UserForm = ({ addUser, updateUser, submitted, selectedUser, isEdit}) => {
    
    const [id, setId] = useState(0); // state variable
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (selectedUser.id && selectedUser.id !==0) {
            setId(selectedUser.id);
            setName(selectedUser.name);
        }
    }, [selectedUser]);


    
    return(
        <Grid 
           container
           spacing={2}
           sx={{
             backgroundColor: '#fffffff',
             marginBottom:'30px',
             display:'block'
           }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{}}></Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                component={'label'}
                htmlFor="id"
                sx={{
                    color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block'
                }}>ID</Typography>
                <Input 
                   type="number"
                   id="id"
                   name="id"
                   sx={{ width: '400px' }}
                   value={id}
                   onChange={e => setId(e.target.value)} 
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                component={'label'}
                htmlFor="id"
                sx={{
                    color: '#000000',
                    marginRight: '20px',
                    fontSize: '16px',
                    width: '100px',
                    display: 'block'
                }}>Name
                </Typography>
                <Input 
                   type="text"
                   id="name"
                   name="name"
                   sx={{ width: '400px' }}
                   value={name}
                   onChange={e => setName(e.target.value)} 
                />
            </Grid>

            <Button sx={{
                margin: 'auto',
                marginBottom: '20px',
                backgroundColor: '#00c6e6',
                color: '#000000',
                marginLeft: '15px',
                marginTop: '20px',
                '&:hover': {
                    opacity: '0.7',
                    backgroundColor: '#00c6e6'
                }
            }}
                onClick={ () => isEdit ? updateUser({id:id, name:name}) : addUser({id:id, name:name})}
            > 
                {
                isEdit ? 'Update' : 'Add'
                }
            </Button>
            
        </Grid>
    );
}
export default UserForm;