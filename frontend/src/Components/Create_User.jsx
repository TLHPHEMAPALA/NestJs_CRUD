import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Create_User';


export default function Create_User() {

  
  return (
    <div className="form">
      <form action="" method="post">
        <div className="name">
          <p>Enter User Name</p>
          <input type="text" name="user name" id="" />
        </div>
        <div className="email">
          <p>Enter Email</p>
          <input type="text" name="user email" id="" />
        </div>
        <div className="role">
          <p>Enter Role</p>
          <input type="text" name="user role" id="" />
        </div>
      </form>
    </div>
  )
}

