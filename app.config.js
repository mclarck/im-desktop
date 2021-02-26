export default {
    token: {
        username: 'clarck',
        email: 'contact.inmarketify@gmail.com',
        phone: '+5491122545810',
        roles: ['ROLE_MANAGER']
    },
    company: 'kioskito',
    graphql: {
        uri: 'http://localhost:8000/api/graphql',
        headers: {
            'IM-COMPANY': 'kioskito'
        }
    },
    rest: {
        uri: 'http://localhost:8000/api',
        headers: {
            Accept: "application/json",
            'IM-COMPANY': 'kioskito'
        }
    },
    io: {
        uri: 'http://localhost:8080',
        options: { transports: ["polling"] }
    }
}