import React from "react";

export default function Form(props) {
  return (
    <div>
      <form onSubmit={props.handle_onSubmit}>
        <legend class="uk-legend">{props.name}</legend>

        <div class="uk-margin">
          <input
            class="uk-input"
            type="text"
            placeholder="Title"
            value={props.title_value}
            onChange={props.handle_onChange}
          />
        </div>

        <div class="uk-margin">
          <input
            class="uk-input"
            type="text"
            placeholder="Description"
            value={props.description_value}
            onChange={props.handle_onChange_D}
          />
        </div>

        <button type="submit" className="uk-button uk-button-primary">
          Add
        </button>
      </form>
    </div>
  );
}
