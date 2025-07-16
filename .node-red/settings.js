module.exports = {
    flowFile: 'flows.json', // ⚠️ Flow JSON bạn đang dùng
    uiPort: process.env.PORT || 1880,

    // Để bảo mật nếu bạn muốn thêm sau
   //adminAuth: null,

    functionGlobalContext: {}, // Cho phép dùng biến toàn cục

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
