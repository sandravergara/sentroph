module.exports = {
    default: `--format=json:./reports/cucumber_report.json \
            --format-options '{"snippetInterface": "synchronous"}' \
            --format node_modules/cucumber-pretty \
            --require cucumber.conf.js \
            --require step-definitions`
}