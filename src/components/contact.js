import React, { Component } from 'react'
import NavBar from "./navigation/navbar"
import Footer from "./navigation/footer"

export default class contact extends Component {
    constructor() {
        super()

        this.state = {
            name: "",
            email: "",
            message: ""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
		fetch("https://ih-capstone-project-api.herokuapp.com/", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	}

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        fetch("https://ih-capstone-project-api.herokuapp.com/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="contact-wrapper">
                <NavBar />
                <form onSubmit={this.handleSubmit} className="form-wrapper">
                    <div className="form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={this.state.name}
                            onChange={this.handleChange}

                        />
                    </div>
                    <div className="form">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form">
                        <textarea
                            name="message"
                            placeholder="Type Your Message"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />

                    </div>
                    <div className="btn-wrapper-form">
                        <button onClick={this.handleSubmit} type="submit" className="btn-form">Send</button>
                    </div>
                </form>
                <Footer />
                
            </div>
        )
    }
}

