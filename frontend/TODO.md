**Frontend**

Dashboard
Faqs
About
Blog
Breakpoints - css
Spinner
Loader
Notifier
Page Access
Calendar Events
Error Page
Public/Private Routes
Header - Footer
Sidebar
Dashboard
Chatbot
                     toast.success('Success');

**Backend**

  style={({ isActive, isPending }) => {
    return {
      color: isActive ? "red" : "inherit",
    };
  }}
  className={({ isActive, isPending }) => {
    return isActive ? "active" : isPending ? "pending" : "";
  }}
/>

const [cartItems, setCartItems] = useState([]);

<Route
    path="/checkout"
    element={ cartItems.length < 1 ? <Navigate to="/products" /> : <Checkout /> }
/>;

const [items, setItems] = useState([]);

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(items));
}, [items]);

{
    props.workouts.map((workout, id) => { //1
        return ( //2
            <tr key={id}> //3
                <th scope="row">{workout.id}</th>
                <td>{workout.result}</td>
                <td>{workout.definition}</td>
                <td>{workout.description}</td>
                <td>
                    //4
                    <Button id={workout.id} onClick={props.delete} color="danger">Delete</Button>| //4
                    <Button id={workout.id} onClick={e => props.update(e, workout)} color="warning">Update</Button>
                </td>
            </tr>
        )
    })
}

 workoutDelete = (event) => {
    fetch(`http://localhost:3000/api/log/${event.target.id}`, {
      method: 'DELETE',
      body: JSON.stringify({ log: { id: event.target.id } }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then((res) => this.fetchWorkouts())
  }