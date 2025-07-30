module.exports = {
    flowFile: 'flows.json', // Flow JSON bạn đang dùng
    uiPort: process.env.PORT || 1880,

    // Để bảo mật nếu bạn muốn thêm sau
    // adminAuth: null,
adminAuth: {
    type: "credentials",
    users: [
        {
            username: "NguyenKN123",
            password: "$2b$08$6yRMJcW8UNaYbyVgTR.5rOmLMPOEekxyxjVY9uozl7kekYP6Qbgje",
            permissions: "*"
        }
    ]
},

    functionGlobalContext: {}, // Cho phép dùng biến toàn cục

    editorTheme: {
        projects: {
            enabled: true
        }
    },

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
