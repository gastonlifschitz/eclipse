import React, { Component } from "react";
import { Form } from "react-bootstrap";
import ButtonEclipse from "./common/ButtonEclipse";
const sgMail = require("@sendgrid/mail");

const { Group, Label, Text, Control } = Form;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export default class FormEclipse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      text: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async () => {
    const { name, mail, text } = this.state;
    const msg = {
      to: mail, // Change to your recipient
      from: "aaacd@fcaglp.unlp.edu.ar", // Change to your verified sender
      subject: "Sending with SendGrid is Fun", //Change subject
      text: text,
      //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <h5>Contacto</h5>
        <p>
          {" "}
          Si usted tiene dudas o consultas sobre el programa Totalidad y
          contenidos del sitio, por favor complete el siguiente formulario:{" "}
        </p>

        <Form>
          <div className="name-mail-container">
            <Group controlId="formBasicEmail" className="formwidth1">
              <Label>¿Cómo te llamás?</Label>
              <Control
                type="text"
                placeholder="ej: Micaela Risso"
                name="name"
                onChange={this.handleInputChange}
              />
            </Group>

            <Group controlId="formBasicEmail" className="formwidth2">
              <Label>¿Cuál es tu mail?</Label>
              <Control
                type="email"
                placeholder="ej: micaelarisso@gmail.com"
                name="mail"
                onChange={this.handleInputChange}
              />
            </Group>
          </div>
          <Group controlId="formBasicPassword">
            <Label>
              ¿Cuál es tu consulta? Intentaremos responderte lo antes posible.
            </Label>
            <Control
              className="controlheight1"
              type="text"
              placeholder="ej: ¿Cómo puedo ver el eclipse desde mi casa? ¿Qué equipamiento necesito?"
              name="text"
              onChange={this.handleInputChange}
            />
          </Group>

          <ButtonEclipse
            type="submit"
            handleClick={() => {
              this.handleSubmit();
            }}
          >
            Enviar
          </ButtonEclipse>
        </Form>
      </div>
    );
  }
}

/*   //     <div className="FormPage">
        //         <form>
        //         <h1>Contacto</h1>
        //         <p>Si usted tiene dudas o consultas sobre el programa Totalidad y contenidos del sitio, por favor complete el siguiente formulario:</p>
        //         <label>Nombre<input type="text" name="nombre"/></label>
        //         <label>¿Cuál es tu mail?<input type="email" name="email"/></label>
        //         <input type='submit' value="submit"/>
        //          </form>
        //     </div>
        */
