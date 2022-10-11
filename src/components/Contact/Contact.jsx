import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Paper from "@material-ui/core/Paper";
import "./Contact.css";
function BasicExample() {
  return (
    <Paper className="contact" id ="contact">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Message</Form.Label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
    </Paper>
  );
}

export default BasicExample;