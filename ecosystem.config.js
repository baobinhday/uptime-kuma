module.exports = {
    apps: [{
        name: "uptime-kuma",
        script: "./server/server.js",
        env: {
            "PORT": 3001
        }
    }]
};
