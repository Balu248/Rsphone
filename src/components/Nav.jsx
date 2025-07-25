import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-info text-white p-4 rounded">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Add Phone</Link>
        <Link class="nav-link" to="/s">Search Phone</Link>
        <Link class="nav-link" to="/d">Delete Phone</Link>
        <Link class="nav-link" to="/v">View all phones</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav