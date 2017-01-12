'use strict';
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');

    return {
        js: {
            options: {
                mangle: false,
                sourceMap: true,
                sourceMapIncludeSources: true
                //sourceMapIn: 'example/coffeescript-sourcemap.js', // input sourcemap from a previous compilation
            },
            files: {
                'app/app.min.js': [
                    'app/bower_components/angular/angular.js',
                    'app/bower_components/angular-route/angular-route.js',
                    'app/app.js',
                    'app/views/**/*.js',
                    '!app/views/**/*test.js',
                    'app/services/*.js',
                    'app/components/**/*.js',
                    '!app/components/**/*test.js'
                    //'app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js'
                ]
            }
        }

    };
};