'use strict';
module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-jshint');

    return {
        options: {
            globalstrict: true,
            globals: {
                angular: true,
                describe: true,
                expect: true,
                beforeEach: true,
                it: true,
                module: true,
                inject: true,
                spyOn: true,
                require: true
            }
        },
        all: [
            'Gruntfile.js',
            'tasks/*.js',
            '!app/bower_components/**/*.js'
        ]
    };

};
