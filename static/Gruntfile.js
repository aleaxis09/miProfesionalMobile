module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
                	sass: {
			development: {
                                		options: {
					style: 'expanded'
                                		},
                                		files: {
					"main/css/styles.css": "main/css/sass/*.scss"
                                		}
                       	},
           		},
                	watch:{
                   		configFiles: {
                              		files: ['Gruntfile.js', 'main/*'],
                                        	options: {
                                             		livereload: true
                                        	}
                                	},
                                	sass: {
                              		files: 'main/css/sass/*.scss',
                                        	tasks: ['sass'],
                                        	options: {
                                              	livereload: true
                                        	},
                                	},
                	},
        	});
	grunt.loadNpmTasks('grunt-contrib-watch');
        	grunt.loadNpmTasks('grunt-contrib-sass');
        	grunt.registerTask('default', ['sass', 'watch']);
};
