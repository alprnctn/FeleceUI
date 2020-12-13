module.exports = function(grunt)
{
    grunt.initConfig({
        concat: {
            js:{
                src: ['js/*.js'],
                dest: 'build/scripts.js'
            },
            css:{
                src:['style/*.css'],
                dest:'build/styles.css',
            }
        },
        autoprefixer:{
            dist:{
              files:{
                'css/style.css':'css/style.css'
              }
            }
          },
        clean: {
            css: ['css/*.css'],
            js: ['js/*.js'],
        },

        watch: {
            css: {
              files: 'less/*.less',
              tasks: ['less', 'browserSync']
            }
          },
        copy: {
            main: {
              expand: true,
              src: 'src/*',
              dest: 'dest/',
            },
          },
        less: {
            development: {
              options: {
                compress: true,
                yuicompress: true,
                optimization: 2
              },
              files: {
                "css/style.css": "less/style.less" 
              }
            }
          },
          browserSync: {
            bsFiles: {
                src : 'less/*.less'
            },
            options: {
                watchTask: true,
                liverload: true,
                server: {
                    baseDir: "./dev",
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-browser-sync');


    grunt.registerTask('concat-js',['concat:js']);
    grunt.registerTask('concat-css',['concat:css']);
    grunt.registerTask('default',['watch']);

};