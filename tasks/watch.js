'use strict';
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');

    return {
        preprocessJs: {
            files: ['./app/**/*!(test).js'],
            tasks: ['jshint', 'uglify'],
            options: {
                debounceDelay: 500,
                interrupt: true,
                event: ['all'], // 'changed', 'added', 'deleted'
                reload: true
            }
        },
        preprocessLess: {
            files: ['./app/**/*.less'],
            tasks: ['less'],
            options: {
                debounceDelay: 500,
                interrupt: true,
                event: ['all'], // 'changed', 'added', 'deleted'
                reload: true
            }
        }
    };

};