import "./Login.css";
import Button from "react-bootstrap/esm/Button";


const LoginForm = (props) => {
  return (
    <dialog className="modal is-open">
        <div className="modal-container">
            <Button className="modal-close" variant="outline-danger">X</Button>
            {props.first}
        </div>
    </dialog>
  )
}

export default LoginForm;