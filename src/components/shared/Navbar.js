import React from 'react'

export default function Navbar() {
  return (
    <div>
       <div>
      


      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
      
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
                  <span class="navbar-toggler-icon"></span>
              </button>
      
              <a class="navbar-brand" href="#">Your Brand</a>
      
           
              <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                          <a class="nav-link" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">About</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Services</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar">
          <div class="offcanvas-header">
              <h5 class="offcanvas-title">Sidebar</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
         
      
          </div>
    </div>
    </div>
  )
}
