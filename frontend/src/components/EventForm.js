import { Form, json, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const data= useActionData()
  const navigate = useNavigate();
  const navigation=useNavigation()

  const isSubmitting= navigation.state==="submitting"

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data&& data.errors&& <ul>
        {Object.values(data.errors).map(err=>(
          <li key={err}>{err}</li>
        ))}</ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event?event.title:""} required  />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" defaultValue={event?event.image:""} required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" defaultValue={event?event.date:""} required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" defaultValue={event?event.description:""} required />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting?"Submitting...":"save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;


export async function action({request,params}){
  const data=await request.formData()
  const method=  request.method
 const enteredData={
      title:data.get("title"),
      date:data.get("date"),
      image:data.get("image"),
      description:data.get("description")
  }
  
  let url='http://localhost:8080/events'
 console.log(request);
  if(method === "PATCH"){
    url='http://localhost:8080/events/'+params.id
  }

  const response=await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enteredData)
    })
  if(response.status=== 422){
      return response
    }
  if(!response.ok){
      throw json({message:"could not save event"},{status:500})

  }else{
      return redirect("/events")
  }
}