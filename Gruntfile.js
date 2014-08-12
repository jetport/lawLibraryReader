/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      }
    },
    connect: {
      dev: { 
        port: 8080
      }
    },
    open : {
      dev : {
        path: 'http://127.0.0.1:8080/',
        app: 'Chrome',
        options:{
          delay : 2 
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-open');

  // Default task.
  grunt.registerTask('default', ['open','connect']);

};
