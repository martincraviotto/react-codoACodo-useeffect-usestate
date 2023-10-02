import React, { useEffect, useState } from 'react'

export const Api = () => {
    
  const [users, setusers] = useState([]);

  useEffect(() => {
    //peticion fetch
    fetch("https://reqres.in/api/users")
        .then(data => data.json())
        .then(json => setusers(json.data));
  }, []);

  console.log(users);

  return (
    <div>
        <h2 className='mt-3 text-center'>Ejemplo de Api</h2>
        <ul>
            {users.map(user=>(
                // <li>
                //     {<img src={user.avatar} alt="" /> }
                // </li>

                <div className="card m-auto m-2" style={{width: "18rem"}}>
                    <img src={user.avatar}  className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{user.last_name}, {user.first_name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

             ))}
        </ul>
    </div>
  )
}
