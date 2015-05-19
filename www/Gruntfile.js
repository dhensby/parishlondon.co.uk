module.exports = function(grunt) {
	
	// Project configuration.
	grunt.initConfig({ 
		
		pkg: grunt.file.readJSON('package.json'), 
		
		sass: {                              
    		dist: {                            
      			options: {
      				sourcemap: 'none',                      
        			style: 'compressed'
      			},
			    files: {                               
			      'css/app.css': 'scss/app.scss'
			    }
    		}
  		},

  		watch: {
  			css: {
    			files: ['scss/*.scss'],
    			tasks: ['sass'],
    			options: {
        			spawn: false,
    			}
			}
  		}
	});

	// Load SASS plugin
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Load Watch plugin
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Go Go Power Rangers
	grunt.registerTask('default', ['sass', 'watch']);

};









