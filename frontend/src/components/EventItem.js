import { Link, /* useSubmit */  json, useNavigate  } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
 const navigate=useNavigate()
 async function startDeleteHandler() {
    const procced=window.confirm("Are you sure?")
    if(procced){
    const response=await fetch('http://localhost:8080/events/'+event.id, {
        method: 'DELETE'
      })   
    if(!response.ok){
        throw json({message:"could not Delete the event"},{status:500})
    }else{
        return navigate("/events")
    }}
  } 
   /* const submit=useSubmit()
   function startDeleteHandler() {
      const procced=window.confirm("Are you sure?")
      if(procced){
        submit
      }
  } */

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
