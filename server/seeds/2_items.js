/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {id: 1, item_name: 'coffee', description: 'columbian roasted to perfection and finely ground, perfect for brewing a cup of espresso; vacuum-sealed to ensure freshness', quantity: '10', users_id: '2'},
    {id: 2, item_name: 'chocolate', description: 'Lindor truffles - the perfect compliment to a freshly brewed cup of espresso', quantity: '5', users_id: '1'},
    {id: 3, item_name: 'sushi', description: 'ocean-fresh fish gently wrapped in layers of delicate seaweed, soft jasmine race, and crisp veggies', quantity: '20', users_id: '4'},
    {id: 4, item_name: 'kombucha', description: 'this bubbly beverage not only quenches your thirst with its tantalizing effervescence, but also boosts gut health with its bountiful probiotics', quantity: '15', users_id: '3'},
  ]);
};
