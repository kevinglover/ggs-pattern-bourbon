module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    clean: {
      options: { force: true },
      files: ['./public/patterns']
    },
    
    copy: {
      main: {
        files: [
        { expand: true, cwd: './source/', src: '*.html', dest: './public/'},
        { expand: true, cwd: './source/js/', src: '*', dest: './public/js/'},
        { expand: true, cwd: './source/css/', src: '*.css', dest: './public/css/' },
        { expand: true, cwd: './source/css/', src: '*.map', dest: './public/css/' },
        { expand: true, cwd: './source/images/', src: ['*.png', '*.jpg', '*.gif', '*.jpeg'], dest: './public/images/' },
        { expand: true, cwd: './source/images/sample/', src: ['*.png', '*.jpg', '*.gif', '*.jpeg'], dest: './public/images/sample/'},
        { expand: true, cwd: './source/fonts/', src: '*', dest: './public/fonts/'},
        { expand: true, cwd: './source/_data/', src: 'annotations.js', dest: './public/data/' },
        { expand: true, cwd: './bower_components/jquery/dist/', src: '*', dest: './public/js/'},
        { expand: true, cwd: './bower_components/bootstrap-material-design/dist/js/', src: '*', dest: './public/js/material/'},
        { expand: true, cwd: './bower_components/bootstrap-material-design/dist/css/', src: '*', dest: './public/css/material/'}
        
        ]
      }
    },
    jshint: {
      options: {
        "curly": true,
        "eqnull": true,
        "eqeqeq": true,
        "undef": true,
        "forin": true,
        //"unused": true,
        "node": true
      }
    },
    watch: {
      scss: { //scss can be watched if you like
        options: {
          livereload: true
        },
        files: ['source/css/**/*.scss', 'public/styleguide/css/*.scss'],
        tasks: ['default']
      },
      all: {
        options: {
          livereload: true
        },
        files: [
        'source/index.html'
        ],
        tasks: ['default']
      }
    },
    sass: {
      build: {
        options: {
          style: 'expanded',
          precision: 8,
          loadPath: require('node-bourbon').includePaths
        },
        files: {
          './source/css/style.css': './source/css/style.scss',
          './source/css/styleguide.css': './source/css/styleguide.scss',
        }
      }
    },
    nodeunit: {
      all: ['test/*_tests.js']
    },
    connect: {
      app:{
        options: {
          port: 9001,
          base: './public',
          hostname: 'localhost',
          open: true,
          livereload: 35729
        }
      }
    },
    
    wiredep: {
      
      task: {
        
        // Point to the files that should be updated when 
        // you run `grunt wiredep` 
        src: [
        'app/views/**/*.html',   // .html support... 
        'app/views/**/*.jade',   // .jade support... 
        'app/styles/main.scss',  // .scss & .sass support... 
        'app/config.yml'         // and .yml & .yaml support out of the box! 
        ],
        
        options: {
          // See wiredep's configuration documentation for the options 
          // you may pass: 
          
          // https://github.com/taptapship/wiredep#configuration 
        }
      }
    }
  });
  
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  
  grunt.loadNpmTasks('grunt-wiredep');
  
  //if you choose to use scss, or any preprocessor, you can add it here
  grunt.registerTask('default', ['wiredep','clean', 'sass', 'copy']);
  
  //travis CI task
  grunt.registerTask('travis', ['wiredep', 'clean', 'sass', 'copy', 'nodeunit']);
  
  grunt.registerTask('serve', ['wiredep', 'clean', 'sass', 'copy', 'connect', 'watch']);
  
};
