build: node_modules build-html build-js build-less

build-html: node_modules
	@mkdir -p dist && cp src/*.html dist

build-js: node_modules lint
	@mkdir -p dist && node_modules/.bin/browserify src/js/app.es -t babelify | \
	node_modules/.bin/uglifyjs -cm --comments > dist/bundle.js

build-less: node_modules
	@mkdir -p dist && node_modules/.bin/lessc src/less/main.less --clean-css > dist/bundle.css

clean:
	@rm -rf dist

lint: node_modules
	@node_modules/.bin/eslint 'src/js/**/*.es'

watch: node_modules
	@node_modules/.bin/watchify src/js/app.es -t babelify -o src/bundle.js & \
	node_modules/.bin/watchf 'src/js/**/*.es' -c 'node_modules/.bin/eslint {}' & \
	node_modules/.bin/watchf 'src/less/**/*.less' -c 'node_modules/.bin/lessc src/less/main.less > src/bundle.css' & \
	http-server src

node_modules: package.json
	@npm install

.PHONY: all clean build watch
