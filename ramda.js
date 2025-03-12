import * as R from 'ramda';

const processUsers = R.pipe(
  R.filter(user => user.active),
  R.map(R.pick(['id', 'name', 'email'])),
  R.sortBy(R.prop('name'))
);
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', active: true },
  { id: 2, name: 'Bob', email: 'bob@example.com', active: false },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true }
];
console.log('Example 1:', processUsers(users));

//
const discount = R.curry((rate, price) => price * (1 - rate));
const tenPercentOff = discount(0.1);
const prices = [100, 200, 300, 400];
const discountedPrices = R.map(tenPercentOff, prices);
console.log('Example 2:', discountedPrices);

//
const sumAndFormat = R.compose(
    amount => `$${amount.toFixed(2)}`,
    R.sum,
    R.map(R.prop('price')),
    R.filter(item => item.inStock)
  );
const items = [
    { name: 'Laptop', price: 999.99, inStock: true },
    { name: 'Phone', price: 499.99, inStock: false },
    { name: 'Tablet', price: 299.99, inStock: true },
    { name: 'Headphones', price: 99.99, inStock: true }
];
console.log('Example 3:', sumAndFormat(items));

//
const user = {
name: 'Akif Tunc',
address: {
    street: '123 Main St',
    city: 'Istanbul',
    zipCode: '12345'
},
preferences: {
    theme: 'light',
    notifications: true
}
};
const addressLens = R.lensProp('address');
const cityLens = R.lensProp('city');
const addressCityLens = R.compose(addressLens, cityLens);
const themeLens = R.lensPath(['preferences', 'theme']);
const updatedUser = R.pipe(
R.set(addressCityLens, 'New City'),
R.set(themeLens, 'dark'))(user);
console.log('Example 4:', updatedUser);
console.log('Original user unchanged:', user);

//
const orders = [
    { id: 1, customer: 'A', items: [{ product: 'Widget', price: 10, qty: 2 }, { product: 'Gadget', price: 20, qty: 1 }] },
    { id: 2, customer: 'B', items: [{ product: 'Widget', price: 10, qty: 5 }] },
    { id: 3, customer: 'A', items: [{ product: 'Gadget', price: 20, qty: 3 }] }
];
const orderTotal = R.pipe(
    R.prop('items'),
    R.map(item => item.price * item.qty),
    R.sum
);

const getCustomerOrderSummary = R.curry((customerName, orders) => {
    const customerOrders = R.pipe(
        R.filter(R.propEq('customer', customerName)),
        R.map(order => ({
            customer: order.customer,
            total: orderTotal(order) // Ensure orderTotal is called correctly
        }))
    )(orders);
    
    return {
        customer: customerName,
        orders: customerOrders,
        totalSpent: R.pipe(
            R.map(R.prop('total')),
            R.sum
        )(customerOrders)
    };
});

console.log('Example 5:', getCustomerOrderSummary('B', orders));