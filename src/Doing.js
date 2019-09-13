import React from "react";
import Form from "./Form";
import List from "./List";

export default class Doing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lista: [{ title: "", description: "" }],
      title_value: "",
      description_value: ""
    };

    this.handle_onSubmit = this.handle_onSubmit.bind(this);
    this.handle_onDelete = this.handle_onDelete.bind(this);
    this.handle_onChange = this.handle_onChange.bind(this);
    this.handle_onChange_D = this.handle_onChange_D.bind(this);
  }

  handle_onSubmit(event) {
    event.preventDefault();
    if (!this.state.title_value) {
      alert("Title Required");
    } else {
      const task = {
        title: this.state.title_value,
        description: this.state.description_value
      };
      this.setState(prev => {
        return {
          lista: [...prev.lista, task],
          title_value: "",
          description_value: ""
        };
      });
    }
  }

  handle_onDelete(i) {
    this.setState(prev => {
      return { lista: prev.lista.filter((x, index) => index !== i) };
    });
  }

  handle_onChange(event) {
    this.setState({
      title_value: event.target.value
    });
  }

  handle_onChange_D(event) {
    this.setState({
      description_value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>DOING</h3>
        <div className="uk-flex uk-flex-column uk-flex-center">
          <List
            lista={this.state.lista}
            handle_onDelete={this.handle_onDelete}
          />

          <div>
            <button
              className="uk-button uk-button-primary uk-margin-top"
              data-uk-toggle="target: #form2"
            >
              Add Task
            </button>
          </div>
        </div>

        <div id="form2" data-uk-modal>
          <div class="uk-modal-dialog uk-modal-body">
            <Form
              name="Add Doing Task"
              title_value={this.state.title_value}
              description_value={this.state.description_value}
              handle_onChange={this.handle_onChange}
              handle_onSubmit={this.handle_onSubmit}
              handle_onChange_D={this.handle_onChange_D}
            />
          </div>
        </div>
      </div>
    );
  }
}
