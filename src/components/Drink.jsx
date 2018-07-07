import React from 'react';
import PropTypes from 'prop-types';

class Drink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pintsRemaining: this.props.pintsRemaining,
    };
    this.onSellPint = this.onSellPint.bind(this);
  }

  onSellPint() {
    this.setState({
      pintsRemaining: this.state.pintsRemaining - 1
    });
  }

  render() {
    const drinkInfo = (
      <div>
        <style jsx>
          {
            ` .pintInfo {
              padding: 10px 40px;
              background-color: rgba(222, 127, 33, .9);
              max-width: 50%;
              margin: auto;
            }
            .sellButton {
              max-height: 30px;
              margin-top: 30px;
            }
             `
          }
        </style>
        <div className="pintInfo">
          <div>
            <p>
              {this.props.name}
            </p>
            <p>
              Brewery: {this.props.brand}
            </p>
            <p>
              Price: {this.props.price}
            </p>
            <p>
              Alcohol Content: {this.props.alcoholContent}
              %
            </p>
            <p>
              Pints Remaining: {this.state.pintsRemaining}
            </p>
          </div>
        </div>
      </div>);

    return (
      <div className="pintInfo">
        {drinkInfo}
        <button className="sellButton" onClick={() => this.onSellPint()}>
          Bye Bye Pint
        </button>
      </div>
    );
  }
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.number.isRequired
};

export default Drink;
