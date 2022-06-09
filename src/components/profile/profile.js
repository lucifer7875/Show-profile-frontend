import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./profile.css";
// import { Button } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { updateuser } from "../actions";



class Profile extends React.Component {


    // Constructor
    constructor(props) {
        super(props)

        this.state = {


            items: {},
            DataisLoaded: false,
        }
    }


    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {


        const { updateUser } = this.props

        const { user } = this.props
        this.setState({ items: user })
        const user_id = JSON.parse(localStorage.getItem("user_values"))._id

        fetch(`http://localhost:9002/profile/${user_id}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                console.log(updateUser);
                updateUser(user)
            })

            .catch((error) => console.log(error))
    }
    render() {

        var allItems = this.state.items





        return (


            <div className="Profile">

                <h1>Profile<i className="bi bi-person-square"></i></h1>


                <div className="input-group  mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">User Name :</span>
                    <input
                        className="form-control"
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        value={allItems.userName}
                    />
                </div>

                <div className="input-group  mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">First Name :</span>
                    <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={allItems.firstName}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Last Name :</span>
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={allItems.lastName}
                    /></div>

                <div className="input-group mb-3">
                    <span className="input-group-text" >Mobile Number :</span>
                    <input
                        className="form-control"
                        type="number"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        value={allItems.mobileNumber}
                    /></div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Email Address :</span>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={allItems.email}
                    />
                </div>

                <div className="input-group  mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Password :</span>
                    <input
                        className="form-control"
                        type="text"
                        name="password"
                        placeholder="Enter password"

                        value={allItems.password}
                    />
                </div>

                {/* <button onClick={Profile} >Profile</button> */}
                <button className="btn btn-primary" onClick={() => this.props.navigate("/home")}>Back</button>
            </div>
        )
    }
}

function WithNavigate(props) {

    let navigate = useNavigate();
    return <Profile {...props} navigate={navigate} />

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateuser(user)),
    }
}
export default connect(status => { return status }, mapDispatchToProps)(WithNavigate)
