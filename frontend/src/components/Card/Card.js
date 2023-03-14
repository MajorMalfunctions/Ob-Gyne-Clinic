import React from "react"
import "../../styles/card.css";
import { blog } from "./blogData"
import { AiOutlineTags, AiOutlineCalendar, AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

const Card = () => {
  return (
      <section className="blog">

        <div className="container grid3">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <Link href="/">#{item.category}</Link>
                </div>
                <Link to={`/details/${item.id}`} className="link">
                  <h5>{item.title}</h5>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineLike className="icon" /> <label htmlFor="">Liked</label>
                  <AiOutlineCalendar className="icon" /> <label htmlFor="">{item.date}</label>
                  <AiOutlineComment className="icon" /> <label htmlFor="">27</label>
                  <AiOutlineShareAlt className="icon" /> <label htmlFor="">SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
  )
}

export default Card;