import React, { useState, useEffect } from "react"
import "./blog.css"
import { blog } from "./blogData"
import { AiOutlineTags, AiOutlineCalendar, AiOutlineLike, AiFillLike, AiOutlineComment, AiFillDislike, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

const Card = () => {
  const [count, setCount] = useState(0);

  const [ clicked, setClicked ]  = useState(false);

  const [ isActive, setIsActive ]  = useState(false);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {blog.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                <Link to={`/blog/${item.id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.description.slice(0, 80)}...</p>
                <div className='date'>
                  { isActive ? <AiOutlineLike
                      className='icon'
                      badge="3"
                      onClick={() => {
                        setIsActive(!isActive)
                        setCount(count + 1)
                      }}/>:
                    <AiFillLike
                      className='icon'
                      onClick={() => {
                        setIsActive(!isActive)
                        setCount(count - 1)
                    }} />
                  }
                  <label htmlFor=''>{item.liked} </label>
                  <p>{count}</p>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                  <AiOutlineCalendar className='icon' /> <label htmlFor=''>{item.date}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Card;
