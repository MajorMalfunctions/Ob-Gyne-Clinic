import React from "react"
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"

const Create = () => {
  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
            <img src='https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image' class='image-preview' />
          </div>
          <form className="blog_form">
            <div className='inputFile flexCenter'>
              <input type='file' accept='image/*' alt='img' />
            </div>
              <label>Title</label>
              <br />
              <input type='text' placeholder='Title' />
            <br />
            <label>Description</label>
            <br />
            <textarea name='' id='' cols='30' rows='10'></textarea>
              <br />
            <button className='button'>Create Blog</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Create;