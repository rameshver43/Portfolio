import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

const ContactForm = () => {
	const [status, setStatus] = useState("Submit");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		const { name, email, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		let response = await fetch("https://rameshverapi.onrender.com/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(details),
		});
		setStatus("Submit");
		let result = await response.json();
		alert(result.status);
	};
	return (
		<div className="displaycontent" id="contact">
			<Grid container>
				<Box
					boxShadow={3}
					m={1}
					p={1}
					style={{
						width: "30rem",
						padding: "10px",
						backgroundColor: "#EEEDE7",
					}}>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Name</Form.Label>
							<Input
								className="form-control"
								type="name"
								id="name"
								placeholder="Enter Name"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Input
								className="form-control"
								type="email"
								id="email"
								placeholder="Enter email"
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Message</Form.Label>
							<TextField
								className="form-control"
								id="standard-multiline-static"
								multiline
								variant="outlined"
							/>
						</Form.Group>
						<Button variant="contained" color="primary" onClick={handleSubmit}>
							{status}
						</Button>
					</Form>
				</Box>
			</Grid>
		</div>
	);
};

export default ContactForm;
