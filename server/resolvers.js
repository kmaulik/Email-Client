const Mail = require('./connectors');

module.exports = {
    Query: {
        mails(_, args) {
            return Mail.findAll({where: args});
        },
    },

    Mutation: {
        addMail(_, args) {
            return Mail.create(args);
        },      
        login: async (_, args) => {
            return Mail.findOne({where: args}).then( (response) => {
                return { message: `Hello ${response.email} `};
            }).catch(error => {
                return {message: `Invalid email address or password.`}
            })
        }
    }
};