//import { json, redirect } from "react-router-dom"
import EventForm from "../components/EventForm"


function NewEvent(){
    return <EventForm method="post"/>
}

export default NewEvent

/* export async function action({request,params}){
    const data=await request.formData()
   const enteredData={
        title:data.get("title"),
        date:data.get("date"),
        image:data.get("image"),
        description:data.get("description")
    }
    
    const response=await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enteredData)
      })
      if(response.status=== 422){
        return response
      }
    if(!response.ok){
        throw json({message:"could not save new event"},{status:500})

    }else{
        return redirect("/events")
    }
} */