import React, { useEffect, useState } from "react"

const Products = (req,res) => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicodfde.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
      .catch(err => {
        res.status(401).json({data: err});
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Products;