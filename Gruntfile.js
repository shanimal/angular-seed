'use strict';
module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    var taskConfig = require("config-grunt-tasks")(grunt, "./tasks");
    taskConfig.pkg = require("./package.json");
    grunt.initConfig(taskConfig);

    grunt.loadNpmTasks('grunt-contrib-watch');

};
