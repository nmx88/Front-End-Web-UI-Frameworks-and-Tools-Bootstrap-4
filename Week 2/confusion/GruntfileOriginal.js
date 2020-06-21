'use strict';
// step 1
module.exports = function(grunt) {

    require('time-grunt')(grunt); /* step 2 */

    require('jit-grunt')(grunt); /* step 2 */

    grunt.initConfig({

        /* step 2 */
        sass: { /* step 2 */
            dist: { /* step 2 */
                files: { /* step 2 */
                    'css/styles.css': 'css/styles.scss' /* step 2 */
                }
            }
        },
        watch: { /* step 3 */
            files: 'css/*.scss', /* step 3 */
            tasks: ['sass'] /* step 3 */
        },
        browserSync: {  /* Lines 25 to 42 step 3 */
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

    grunt.registerTask('css',['sass']); /* step 2 */
    grunt.registerTask('default', ['browserSync', 'watch']); /* step 3 */
};