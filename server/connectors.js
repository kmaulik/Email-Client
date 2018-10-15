// var Sequelize = require('sequelize');
// var mysql = require('mysql');
// var _ = require('lodash');

// var Conn = new Sequelize('email_client', 'root', '', {
//     host: '127.0.0.1',
//     dialect: 'mysql'
// });
// console.log("hello");
// var Sectors = Conn.define('sectors', {
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     notes: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     status: {
//         type: Sequelize.BOOLEAN,
//         allowNull: false
//     }
// });
// //email`, `notes`, `status
// Sectors.sync({ force: true }).then(function () {
//     // Table created
//     return Sectors.create({
//         email: 'rip@narola.email',
//         notes:'hello how are you',
//         status:true
//     });
// });

// exports.default = Conn;


const Sequelize = require('sequelize');

const db = new Sequelize('email_client', 'root','', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

const MailModel = db.define('mail', {
    email: { type: Sequelize.STRING },
    notes: { type: Sequelize.STRING },    
    password: { type: Sequelize.STRING },
    is_active: { type: Sequelize.ENUM('YES', 'NO'),defaultValue: 'YES'},
}, {
    timestamps: false
});

db.sync();

const Mail = db.models.mail;

module.exports = Mail;