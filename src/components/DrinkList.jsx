import React from 'react';
import Drink from './Drink';

const drinks = [
  {
    name: 'Butter Beer',
    brand: 'Hogs Meade Tavern',
    price: '$6',
    alcoholContent: '5.7',

  },
  {
    name: 'Wynne Jones',
    brand: 'Brewery in the Sky',
    price: '$5',
    alcoholContent: '5.9'
  },
  {
    name: 'Gobsmack Gaiman',
    brand: 'Brewery at the End of the Lane',
    price: '$8',
    alcoholContent: '4.3'
  },
  {
    name: 'Portland Primer',
    brand: 'Duck Tales',
    price: '$6.50',
    alcoholContent: '5.5'
  },
  {
    name: 'TBD',
    brand: 'DawnrParty',
    price: '$4',
    alcoholContent: '5.9'
  },
  {
    name: 'Mustards Maginks',
    brand: 'DawnrParty',
    price: '$8',
    alcoholContent: '4.3'
  }
];


function DrinkList() {
  return(
    <div>
      {drinks.map((drink, index) =>
        <div>
          <Author
            name={drink.name}
            brand={drink.brand}
            price={drink.price}
            alcoholContent={drink.alcoholContent}
            key={index}
          />
        </div>
      )}
    </div>
  );
}

export default DrinkList;