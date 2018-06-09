import React, { Component } from "react";
import "./inputForm.css";

const InputForm = () =>
    <form className="card componentFormat">
    <h3 className = "boxTitle">Search</h3>
        <p>Topic  <input type="text" className="topic" /></p>
        
        <p>Start Year <input type="number" className="startYear" /></p>
        
        <p>End Year <input type="number" className="endYear" /></p>
        
        <button className="btn btn-danger btn-small">Search</button>
    </form>

export default InputForm

