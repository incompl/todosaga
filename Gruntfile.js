module.exports = function(grunt) {

  grunt.initConfig({

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "dest/index.html": ["src/index.jade"]
        }
      }
    },

    stylus: {
      compile: {
        files: {
          'dest/screen.css': ['src/screen.styl']
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            filter: 'isFile',
            src: ['src/img/**'],
            dest: 'dest/img'
          },
        ],
      },
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['src/*.jade'],
        tasks: ['jade']
      },
      css: {
        files: ['src/*.styl'],
        tasks: ['stylus']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jade', 'stylus', 'copy']);

};