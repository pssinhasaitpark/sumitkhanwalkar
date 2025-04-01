import React from "react";
import "./Contactform.css"
const Contactfrom = () => {
  return (
    <div>
      <div>
        <p className="fs-1 fw-bold text-center">
          <span className="text-color">CONTACT</span>
          <span className="text-color ms-3">ME</span>{" "}
        </p>
      </div>
      <div className=" contact-form mx-auto">
      <form>
      <div class="form-group my-3">
    <label for="exampleInputName"className="text-white">Your Name</label>
    <input type="name" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name"/>
  </div>
  <div class="form-group my-3">
    <label for="exampleInputEmail1"className="text-white">Email address</label>
    <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group my-3">
    <label for="exampleInputName"className="text-white">Your Question</label>
    <input type="text" class="form-control" id="exampleInputQuestion" aria-describedby="QuestionHelp" placeholder="Enter Question"/>
  </div>
  <button type="submit" class="btn bg-danger text-white w-100 my-4">Submit</button>
</form>
      </div>
    </div>
  );
};

export default Contactfrom;
