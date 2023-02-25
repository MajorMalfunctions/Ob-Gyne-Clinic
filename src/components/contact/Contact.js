import "../../styles/contact.css";

function Contact() {
    return(
        <div className="form-container">
            <h1>Send Me A Message!</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Contact;