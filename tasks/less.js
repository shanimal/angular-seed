'use strict';
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');

    // removed because this runs every time
    // var files = grunt.file.expand('./app/**/*.less');

    return {
        files: {
            //'static/app.css': 'app/**/*.less'
            src: [
                'app/bower_components/html5-boilerplate/dist/css/normalize.css',
                'app/bower_components/html5-boilerplate/dist/css/main.css',
                'app/**/*.less'
            ],
            dest: 'app/app.min.css',
            ext: '.css',
            options: {
                compress: true
            }
        }

    };
};