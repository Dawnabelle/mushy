import React from 'react';
import Drink from './Drink';

const drinks = [
  {
    name: 'Butter Beer',
    brand: 'Hogs Meade Tavern',
    price: '$6',
    alcoholContent: '5.7',
    pintsRemaining: 124,

  }, {
    name: 'Wynne Jones',
    brand: 'Brewery in the Sky',
    price: '$5',
    alcoholContent: '5.9',
    pintsRemaining: 124,
  }, {
    name: 'Gobsmack Gaiman',
    brand: 'Brewery at the End of the Lane',
    price: '$8',
    alcoholContent: '4.3',
    pintsRemaining: 124,
  }, {
    name: 'Portland Primer',
    brand: 'Duck Tales',
    price: '$6.50',
    alcoholContent: '5.5',
    pintsRemaining: 124,
  }, {
    name: 'TBD',
    brand: 'DawnrParty',
    price: '$4',
    alcoholContent: '5.9',
    pintsRemaining: 124,
  }, {
    name: 'Mustards Maginks',
    brand: 'DawnrParty',
    price: '$8',
    alcoholContent: '4.3',
    pintsRemaining: 124,
  },
];

class DrinkList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks,
    };
    this.onSellPint = this.onSellPint.bind(this);
  }

  onSellPint(drink) {
    console.log("Yeah, I sould a Pintah!");
  
  }

  render() {
    return (
      <div>
        {
          this.state.drinks.map((drink, index) => (
            <div>
              <Drink
                name={drink.name}
                brand={drink.brand}
                price={drink.price}
                alcoholContent={drink.alcoholContent}
                pintsRemaining={drink.pintsRemaining}
                key={index}
                handleSellPint={this.onSellPint}
              />
            </div>
          ))
        }
      </div>
    );
  }
}


export default DrinkList;
