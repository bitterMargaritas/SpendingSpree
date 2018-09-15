# Spending Spree

This React App will help you with your money management.

## step one : The friend saver

Ever fronted money and didn't remember who owed what ?

Ever felt distraught paying a bill with 5 different credit cards ?

Then the friend saver is for you!

If you front money, they you can add friends to a group that splits the bill.

Everyone's debt is recorded and can be erased when :
- the directly reimburse the money
- they front the money for another spending spree!
- the debt is forgiven.

For thisn we will need :
- An app
- A server
- A database
- A authentication scheme

### Deploy me!

I need:

`npm install -g nodemon`

`brew install mongodb`
`sudo mkdir -p /data/db`

`sudo mongod`
`nodemon ./server.js localhost 3000`

This creates a user :

```
curl -X POST --header "Content-Type: application/json" -d '{"name":"Lorena", "amountOwed":300}' http://localhost:3000/users
```

This displays a user :
```
curl localhost:3000/users/Lorena
```
