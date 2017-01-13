//jshint strict: false
module.exports = function(config) {
  console.log('CONFIG')
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      'services/**/*.js',
      'components/**/*.js',
      'view*/**/*.js'
    ],

    customLaunchers: {
      'PhantomJS_MobileFirst': {
        base: 'PhantomJS',
        options: {
          windowName: 'some-window',
          settings: {
            webSecurityEnabled: false
          },
          flags: ['--load-images=true'],
          debug:true,
          viewportSize: {
            width: 360,
            height: 640
          }
        }
      }
    },

    autoWatch: true,

    frameworks: ['jasmine'],
    browsers: ['Chrome'],

    plugins: [
      //'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      //'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
