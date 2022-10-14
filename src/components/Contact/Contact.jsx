import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Paper from "@material-ui/core/Paper";
import "./Contact.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

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
		<Paper className="contact" id="contact">
			<div className="aboutheading">Contact Us</div>
			<div className="displaycontent">
				<Grid container>
					<Box
						boxShadow={3}
						bgcolor="background.paper"
						m={1}
						p={1}
						style={{ width: "30rem", padding: "20px" }}>
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Name</Form.Label>
								<Form.Control type="name" id="name" placeholder="Enter email" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
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
								<textarea
									className="form-control"
									id="message"
									required
									rows="3"></textarea>
							</Form.Group>
							<Button variant="primary" type="submit">
								{status}
							</Button>
						</Form>
					</Box>
				</Grid>
			</div>
		</Paper>
	);
};

export default ContactForm;
