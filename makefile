new-version:
	mkdir $(v)
	mkdir $(v)/src
	cd $(v) && npm i -D typescript
	cd $(v) && npx tsc --init
	mkdir -p $(v)/.vscode
	cp settings.json $(v)/.vscode/settings.json
	cp .gitignore.tpl $(v)/.gitignore



	
	
	