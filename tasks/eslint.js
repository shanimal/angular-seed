'use strict';
module.exports = function (grunt) {

    grunt.loadNpmTasks("gruntify-eslint");
    return {
        src: [
            "app/components/**/*.js",
            "app/services/**/*.js",
            "app/views/**/*.js",
            "app/*.js",
            "!app/*.min.js",
            "e2e-tests/*.js",
            "tasks/*.js"
        ],
        options: {
            config: ".eslintrc"
        }
    };

};