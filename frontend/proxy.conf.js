const Agent = require('https').Agent;

module.exports = [
    {
        context: [
            "/api",
            "/identity-server",
            "/scripts",
            "/images",
            "/favicon.ico"
        ],
        target: "https://localhost:5001",
        secure: false,
        changeOrigin: true,
        agent: new Agent({ rejectUnauthorized: false })
    }
];
