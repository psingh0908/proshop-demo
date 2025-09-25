import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
        {
        name: "Priya Singh",
        email: "priya@email.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
        {
        name: "Test User",
        email: "test@email.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

export default users;