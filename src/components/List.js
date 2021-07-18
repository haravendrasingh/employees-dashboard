import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  
function List({ list, onDelete, onEdit }) {
    const classes = useStyles()  
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >Designation</TableCell>
              <TableCell >Email Id</TableCell>
              <TableCell >Gender</TableCell>
              <TableCell >DOJ</TableCell>
              <TableCell >Salary</TableCell>
              <TableCell >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.designation}</TableCell>
                <TableCell>{row.emailId}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.doj}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell><Button size="small" variant="contained" onClick={()=>onEdit(row.id)}>Edit</Button> <Button size="small" variant="contained" onClick={()=>onDelete(row.id)}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  export default List;
  