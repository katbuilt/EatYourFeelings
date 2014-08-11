module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      // sass files get compiled into css files
     sass: {
      dist: {
        files: {    //where files go to or from
            'dev/css/style.css': 'dev/scss/style.scss',   // destination: source
            'dev/css/reset.css': 'dev/scss/reset.scss',
       }
      }
     },
    // JShint
    jshint: {
      files: ['Gruntfile.js', 'dev/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      css: {
        files: ['dev/scss/*.scss', '<%= jshint.files %>'],
        tasks: ['sass', 'jshint', 'autoprefixer', /*'recess'*/]
      },
       options: {
          livereload: true
       }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
      },
      no_dest: {
        src: 'dev/css/style.css'
      }
    // },
    // recess: {
    //     dist: {
    //       options: {
    //         compile: false,
    //         compress: true,
    //         noIDs: false,
    //         noUniversalSelectors: true
    //       },
    //       files: {
    //         'css/mini.css' : 'css/style.css'
    //       }
    //     }
       }
    
  });


  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  // grunt.loadNpmTasks('grunt-recess');

  grunt.registerTask('default', ['jshint', 'sass','watch']);

};