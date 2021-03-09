const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'olanrogers',
        email: 'tennesseewonderchild@sodaparlor.com',
        password: 'password123'
    },
    {
        username: 'garygoodspeed',
        email: 'ohmycrap@finalspace.com',
        password: 'hotQuinn123'
    },
    {
        username: 'quinnergon',
        email: 'quinninfinityquard@infinityguard.net',
        password: 'password123'
    },
    {
        username: 'HUE',
        email: 'mainframeai@galaxyone.com',
        password: 'password123'
    },
    {
        username: 'avacato',
        email: 'avacatomerc@lordcommander.com',
        password: 'lilCato123'
    },
    {
        username: 'littlecato',
        email: 'thundercat@galaxyone.com',
        password: 'password123'
    },
    {
        username: 'KVN',
        email: 'cookies4me@galaxyone.com',
        password: 'password123'
    },
    {
        username: 'lordcommander',
        email: 'lordcommander@lordcommander.com',
        password: 'password123'
    },
    {
        username: 'johngoodspeed',
        email: 'john.g.speed@finalspace.com',
        password: 'password123'
    },
    {
        username: 'mooncake',
        email: 'chookity@finalspace.com',
        password: 'chookitychookity123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
