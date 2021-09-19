import React, {useEffect, useState} from 'react'

const Card = () => {
  
  const [initials,setInititals] = useState("MA");
  const [name,setName] = useState("Mehtab Akram");
  const [phone,setphone] = useState("123-345-6788");
  const [email,setEmail] = useState("a@a.com");
  const [favorite,setFavorite] = useState(true);
  const activeClass = favorite ? 'active':'';
  useEffect(()=>{
    console.log('stateChanged');
  })
  return (

    <section className="card-container">
      <header className="card-header">
        <span initials={initials}></span>
        <h2>{name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => { setFavorite(!favorite) }}
        >
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {phone ? phone : 'n/a'}
          </li>
          <li>
            <span>Email</span>
            {email ? email : 'n/a'}
          </li>
        </ul>
      </main>
    </section>
  )
}

export default Card