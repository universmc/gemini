init :
	@node init.js

update:
	@echo "✨ Mise à jour de l'application sur le répertoire GitHub ✨"
	@git add .
	@git commit -m "update"
	@git push

build :
	@echo ✨ Génération de la page HTML en cours ✨
	@node html.js
	@bash ./build).sh