build: node_modules clean test build-html build-js build-less

clean:
	@rm -rf dist

test:
	@node_modules/.bin/mocha --compilers js:babel/register test/**/*.test.js

build-html: node_modules
	@mkdir -p dist && cp src/*.html dist

build-js: node_modules lint
	@mkdir -p dist && node_modules/.bin/browserify src/js/app.es \
		-t babelify \
		-t [ jstify --noMinify ] | \
	node_modules/.bin/uglifyjs -cm --comments > dist/bundle.js

build-less: node_modules
	@mkdir -p dist && node_modules/.bin/lessc src/less/main.less --clean-css > dist/bundle.css

lint: node_modules
	@node_modules/.bin/eslint 'src/js/**/*.es'

watch: node_modules
	@node_modules/.bin/watchify src/js/app.es \
		-t babelify \
		-t [ jstify --noMinify ] \
		-o src/bundle.js & \
	node_modules/.bin/watchf 'src/js/**/*.es' -c 'node_modules/.bin/eslint {}' & \
	node_modules/.bin/watchf 'src/less/**/*.less' -c 'node_modules/.bin/lessc src/less/main.less > src/bundle.css' & \
	http-server src

node_modules: package.json
	@npm install

.PHONY: all clean test build build-html build-js build-less lint watch
