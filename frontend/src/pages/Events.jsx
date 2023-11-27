
import EventsList from '../components/EventsList';
import { json, useLoaderData } from 'react-router-dom';

function Events() {
  const fetchedEvents=useLoaderData()
  
  return (
    <>
      <EventsList events={fetchedEvents.events} />
    </>
  );
}

export default Events;


export async function loader(){
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json({message:"could not fetch the Items"},{status:500})
      } else {
        return response
      }
}