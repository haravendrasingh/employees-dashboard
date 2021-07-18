import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import List from './components/List';
import FormDialog from './components/FormDialog';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const listData = [
  { id: "c7faca04-455b-4516-a55a-7c48c4f37d9c", name:"Abhishek", designation:"IT", emailId:"abhishek@gmail.com", gender:"Male", doj:"2021-07-11", salary: 80000 },
  { id: "41079b7a-9d1a-4326-ba9a-4e1da6e05d0e", name:"Harry", designation:"IT", emailId:"harry@gmail.com", gender:"Male", doj:"2020-07-13", salary: 50000 }
];

function App() {
  const classes = useStyles();
  const [list, setList] = useState(listData);
  const [isToggle, toggleDialog] = useState(false);
  const [itemData, setItemData] = useState(null);
 
  const onSubmit=(item)=>{
    const updatedList=[...list];
    if( itemData && itemData.id ){
      const index=updatedList.findIndex((item)=>item.id === itemData.id);
      updatedList[index]={...item, id: itemData.id}
    }else{
      updatedList.push({...item, id: uuidv4()})
    }
    setList(updatedList);
    setItemData(null)
  }

  const onDelete=(id)=>{
    const filteredList=list.filter((item)=>item.id !== id);
    setList(filteredList);
  }

  const onEdit=(id)=>{
    const data=list.find((item)=>item.id === id);
    setItemData(data);
    toggleDialog(!isToggle);
  }
  return (
    <div className={classes.root}>
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={()=>toggleDialog(!isToggle)}>Add</Button>
        </Toolbar>
      </AppBar>
      <List 
        list={list}
        onDelete={onDelete}
        onEdit={onEdit}
      />
     {isToggle && <FormDialog 
        itemData={itemData}
        isToggle={isToggle}
        toggleDialog={toggleDialog} 
        onSubmit={onSubmit}
      />}
    </div>
  );
}

export default App;
