import React from 'react'

function Main() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return (
    <div>
      <h1>home</h1>
      <button onClick={handleLogout} >logout</button>
    </div>
  )
}

export default Main
