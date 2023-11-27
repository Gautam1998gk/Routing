import { /* json, redirect, */ useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"


function EditEvent(){
    const data=useRouteLoaderData("event-detail")
    const event=data.event
    return <EventForm  event={event} method="patch"/>
}

export default EditEvent


/* export async function action({request,params}){
    const data=await request.formData()
   const enteredData={
        title:data.get("title"),
        date:data.get("date"),
        image:data.get("image"),
        description:data.get("description")
    }
   
    const response=await fetch('http://localhost:8080/events/'+params.id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enteredData)
      })
    if(!response.ok){
        throw json({message:"could not update the event"},{status:500})

    }else{
        return redirect("/events")
    }
} */