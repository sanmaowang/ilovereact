.PHONY: server css
	
server:
	browser-sync start --server --files "css/*.css, *.html"

css:
	mkdir -p bundle
	postcss --watch --use autoprefixer  --use postcss-import css/app.css --output bundle/app.css

