export default {
    token: {
        username: 'clarck',
        email: 'contact.inmarketify@gmail.com',
        phone: '+5491122545810',
        roles: ['ROLE_MANAGER']
    },
    company: 'kioskito',
    graphql: {
        uri: 'http://192.168.0.227:8000/api/graphql',
        headers: {
            'IM-COMPANY': 'kioskito'
        }
    },
    rest: {
        uri: 'http://192.168.0.227:8000/api',
        headers: {
            Accept: "application/json",
            'IM-COMPANY': 'kioskito'
        }
    },
    io: {
        uri: 'http://192.168.0.227:8080',
        options: { transports: ["polling"] }
    }
}