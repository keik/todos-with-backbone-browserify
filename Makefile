all: clean build

clean:
	@rm -rf dist

build: clean node_modules
	@mkdir -p dist && node_modules/.bin/browserify src/js/app.js -t babelify | \
	node_modules/.bin/uglifyjs -cm > \
	dist/bundle.js

lint: node_modules
	@node_modules/.bin/eslint 'src/js/**/*.js'

watch: node_modules
	@node_modules/.bin/watchify src/js/app.js -t babelify -o src/bundle.js & http-server src

node_modules: package.json
	@npm install

.PHONY: all clean build watch
