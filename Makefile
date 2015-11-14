.PHONY: server
server:
	browser-sync start --server --files "css/*.css, *.html"
