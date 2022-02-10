import React from 'react'
import './addevent.css'
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import db from './index.js'

const Addevent = () => {
  // const [value, setValue] = React.useState("");
  // const db = firebase.firestore();
  // const getValue = (event) => {
  //   setValue(event.target.value);
  // };

  // const addValue = () => {
  //   db.collection("values")
  //     .doc(value)
  //     .set({
  //       value: value,
  //     })
  //     .then(function () {
  //       console.log("Value successfully written!");
  //     })
  //     .catch(function (error) {
  //       console.error("Error writing Value: ", error);
  //     });
  // };

    return (
        <>
            <div className='bg'>
            <div className='container'>
            
            <form>
            <h2>Add Event</h2>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Event Name</label>
    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder=" Enter event name"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Location</label>
    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter location"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Date</label>
    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Enter date"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Time</label>
    <input type="time" className="form-control" id="exampleFormControlInput1" placeholder="Enter time"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Amount</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter amount"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">No.of participants required</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter no.of participants"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Enter appropriate image for event</label>
    <br/>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" placeholder="Enter appropriate image for event"/>
  </div>
  {/* <div className="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
  {/* <div className="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Add Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className="text-center"><button type="button" >Submit</button></div>
</form>
    </div>
    </div>

        </>
    )
}

export default Addevent
