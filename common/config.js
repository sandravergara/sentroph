const config = {
    development: {
        url: 'https://app.dev.sentro.ph/'
    }
}

module.exports = (function() {
    const testEnv = process.env.TEST_ENV || 'development';

    return config[testEnv];
})()
