module.exports = function(grunt){

	// 任务配置，所有插件的配置信息
	grunt.initConfig({

		// 获取 packge.json 的信息
		pkg: grunt.file.readJSON('package.json'),

		// clean-清空文件夹
		clean: ["dist/css"],

		// sass-转成css
		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'dist/css/style.css': 'src/scss/style.scss'
	            }
	        }
		},

		// cssmin-合并压缩css
		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  // 合并文件
		  target: {
		    files: {
		      'dist/css/style.min.css': ['dist/css/*.css']
		    }
		  }
		},

		// watch-检测文件改动
		watch: {
		  build: {
		    files: ['src/scss/style.scss'],
		    tasks: ['clean', 'sass', 'cssmin'],
		    options: {
		      spawn: false
		    }
		  }
		}

	});

	// 加载的插件
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 告诉grunt当我们在终端输入grunt时需要做些什么（注意先后顺序）
	grunt.registerTask('default', ['clean', 'sass', 'cssmin', 'watch']);

};