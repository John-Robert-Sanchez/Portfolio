<template>
    <div class="contact-container">
      <h4>Personal Information</h4>
      <div class="contact-info">
        <div class="contact-column">
          <p><strong>Name:</strong> Robert Sanchez</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Birthdate:</strong> October 9 2000</p>
          <p><strong>Age:</strong> 23</p>
        </div>
        <div class="contact-column">
          <p><strong>Address:</strong> Babang Cordova Cebu</p>
          <p><strong>School: </strong> Cordova Public College</p>
          <p><strong>Course: </strong> Bachelor of Science and Information Technology</p>
          <p><strong>Email Address:</strong> Johnrobertsanchez81@gmail.com</p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .contact-container {
    margin: 10%; 
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    text-align: left; 
    background-image: url('@/assets/robertback.png'); 
    background-size: cover; 
    background-repeat: no-repeat; 
    padding: 200px; 
    border-radius: 10px; 
    color: #fff; 
  }
  
  .contact-info {
    display: flex;
    flex-direction: column; 
    gap: 20px; 
  }
  
  .contact-column {
    flex: 1;
  }
  </style>
  
  
  
  
  