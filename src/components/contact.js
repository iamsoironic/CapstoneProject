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
    }
    render() {
        return (
            <div className="contact wrapper">
                <NavBar />
                <form className="form-wrapper">
                    <div className="form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="form">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="form">
                        <textarea
                            name="message"
                            placeholder="Type Your Message"
                        />

                    </div>
                    <div class="btn-wrapper-form">
                        <button type="submit" class="btn-form">Send</button>
                    </div>
                </form>
                <Footer />
                
            </div>
        )
    }
}

