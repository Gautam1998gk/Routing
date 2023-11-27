import { json, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"


function EventDetail(){
    const data=useRouteLoaderData("event-detail")
    return <>
    <EventItem event={data.event} />
    </>

}

export default EventDetail


export async function loader({request,params}){
    const selectedId=params.id
    const response = await fetch('http://localhost:8080/events/'+selectedId);
    if (!response.ok) {
        throw json({message:"could not fetch the Selected Items"},{status:500})
      } else {
        return response
      }
}