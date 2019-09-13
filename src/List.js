import React from 'react';

export default function List(props) {
    return (
        <div>
            {props.lista.map((x, index) => {
              if (x.title) {
                return (
                  <div className="uk-card uk-card-default uk-margin-bottom">
                    <div className="uk-card-header">
                      <div className="uk-grid-small uk-flex-middle" uk-grid>
                        <div className="uk-width-expand">
                          <h3 className="uk-card-title uk-margin-remove-bottom">
                            {x.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    {x.description ? (
                      <div className="uk-card-body">
                        <p>{x.description}</p>
                      </div>
                    ) : (
                      <span></span>
                    )}

                    <div className="uk-card-footer">
                      <button
                        onClick={ _ => props.handle_onDelete(index)}
                        className="uk-button uk-button-text"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              }
              return <div></div>;
            })}
          </div>
    );
}