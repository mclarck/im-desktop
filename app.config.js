export default {
    token: {
        username: 'clarck',
        email: 'contact.inmarketify@gmail.com',
        phone: '+5491122545810',
        roles: ['ROLE_MANAGER']
    },
    company: 'kioskito',
    graphql: {
        uri: 'https://api.inmarketify.ml/api/graphql',
        headers: {
            'IM-COMPANY': 'kioskito'
        }
    },
    rest: {
        uri: 'https://api.inmarketify.ml',
        headers: {
            Accept: "application/json",
            'IM-COMPANY': 'kioskito'
        }
    },
    io: {
        uri: 'https://io.inmarketify.ml',
        options: { transports: ["polling"] }
    }
}