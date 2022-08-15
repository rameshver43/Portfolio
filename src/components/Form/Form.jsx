import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: false,
      contact: "",
      email: "",
      emailError: false,
      emailError2: false,
      message: "",
      messageError: false,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  }

  // isValidcontact(contactno) {
  //   return /^[6-9]\d{9}$/.test(contactno);
  // }

  handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });

    if (value.length <= 0 && name == "name") {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
    }

    if (value.length <= 0 && name == "email") {
      this.setState({ emailError: true });
      this.setState({ emailError2: false });
    } else {
      this.setState({ emailError: false });
      if (this.isValidEmail(value)) {
        this.setState({ emailError2: false });
      } else {
        this.setState({ emailError2: true });
      }
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const {
      name,
      email,
      message,
      nameError,
      emailError,
      emailError2,
      messageError,
    } = this.state;

    this.setState({ nameError: name ? false : true });
    this.setState({ messageError: message ? false : true });
    this.setState({ emailError: email ? false : true });
    if (email && !emailError) {
      this.setState({ emailError2: this.isValidEmail(email) ? false : true });
    }

    if (
      name &&
      email &&
      message &&
      !nameError &&
      !emailError &&
      !emailError2 &&
      !messageError
    ) {
      this.setState({ formValid: true });
    } else {
      this.setState({ formValid: false });
    }

    e.preventDefault();
  }

  render() {
    const {
      name,
      email,
      message,
      nameError,
      emailError,
      emailError2,
      messageError,
      formValid,
    } = this.state;

    if (!formValid) {
      return (
        <>
          <div className="c-right">
            <form
              action="/"
              onSubmit={(e) => this.handleSubmit(e)}
              encType="multipart/form-data"
              autoComplete="off"
            >
              <input
                name="name"
                type="text"
                className="user"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />

              <input
                name="email"
                type="email"
                className="user"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />

              <input
                name="contact"
                type="text"
                className="user"
                placeholder="Contact"
                onChange={this.handleChange}
                value={this.state.contact}
              />

              <textarea
                name="message"
                type="text"
                className="user"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />

              <p className="text-center mb-0">
                <input type="submit" className="button" value="Submit Now" />
              </p>
            </form>
          </div>
        </>
      );
    } else {
      return (
        <div className="thankyou_details">
          <div className="alert alert-success mt-3">
            Mail sent successfully.
          </div>
        </div>
      );
    }
  }
}

export default Form;
