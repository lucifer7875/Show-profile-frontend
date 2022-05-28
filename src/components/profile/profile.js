import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./profile.css";


// import bootstrap from "react-bootstrap"


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

        const user_id = JSON.parse(localStorage.getItem("user_values"))._id
        fetch(`http://localhost:9002/profile/${user_id}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.setState({
                    items: json,
                    DataisLoaded: true,
                })
            })

            .catch((error) => console.log(error))
    }
    render() {
        var allItems = this.state.items

        return (

            <div className="Profile">

                <h1>Profile</h1>


                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">User Name :</span>
                    <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        value={allItems.userName}
                    />
                </div>

                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">First Name :</span>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={allItems.firstName}
                    />
                </div>

                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Last Name :</span>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={allItems.lastName}
                    /></div>

                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Mobile Number :</span>
                    <input
                        type="number"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        value={allItems.mobileNumber}
                    /></div>

                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Email Address :</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={allItems.email}
                    />
                </div>

                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Password :</span>
                    <input
                        type="text"
                        name="password"
                        placeholder="Enter password"

                        value={allItems.password}
                    />
                </div>



            </div>
        )
    }
}

export default Profile
