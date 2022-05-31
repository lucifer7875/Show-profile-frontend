import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./update.css"
import axios from "axios"
// import { Button } from 'react-native';
import { useNavigate } from 'react-router-dom';



class UpdateProfile extends React.Component {


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
        const update = () => {
            var newUser = {}
            for (let key in this.props.user) {
                this.props.user[key] === "" ? delete this.props.user.key : newUser[key] = this.props.user[key];
            }
            // delete newUser.userName
            newUser.id = JSON.parse(localStorage.getItem("user_values"))._id
            console.log("new user");
            console.log(newUser);
            axios.post("http://localhost:9002/update", newUser)
                .then(res => {
                    // alert(res.data.message)
                    // console.log(this.props.user);


                })

        }

        return (


            <div className="Update">
                {console.log("User", this.props.user)}

                <h1>Update Profile<i className="bi bi-person-square"></i></h1>


                <div className="input-group  mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">User Name :</span>
                    <input
                        className="form-control"
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        onChange={this.props.handlechange}
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
                        onChange={this.props.handlechange}
                        // value={this.props.user.firstName === "" ? allItems.firstName : this.props.user.firstName}
                        value={this.props.user.firstName || allItems.firstName}
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Last Name :</span>
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.props.handlechange}
                        value={allItems.lastName}
                    /></div>

                <div className="input-group mb-3">
                    <span className="input-group-text" >Mobile Number :</span>
                    <input
                        className="form-control"
                        type="number"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        onChange={this.props.handlechange}
                        value={allItems.mobileNumber}
                    /></div>

                <div className="input-group mb-3">
                    <span className="input-group-text">Email Address :</span>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={this.props.handlechange}
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
                        onChange={this.props.handlechange}

                        value={allItems.password}
                    />
                </div>


                <button className="btn btn-primary" onClick={update}>Back</button>
            </div>
        )
    }
}

function UpdateMyProfile(props) {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handlechange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const additonalProps = {
        navigate: navigate,
        handlechange: handlechange,
        user: user,
    }




    return <UpdateProfile {...props}{...additonalProps} />

}


export default UpdateMyProfile
