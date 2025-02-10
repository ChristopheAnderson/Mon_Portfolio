                  ************************    For Github  ***************************** 

git config --global user.name "ChristopheAnderson"
git config --global user.email "christophewavoeke18@gmail.com"


              ***********************Supprimer le dépôt distant (origin)***********************
Utilise cette commande pour supprimer la connexion au dépôt distant :

git remote remove https://github.com/ChristopheAnderson/Mon_Portfolio.git


Quick setup — if you’ve done this kind of thing before
or	
https://github.com/ChristopheAnderson/Web.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.


…or create a new repository on the command line
echo "# Web" >> README.md
git init

git add README.md
git commit -m "first commit"


git branch -M main
git remote add origin https://github.com/ChristopheAnderson/Web.git
git push -u origin main



…or push an existing repository from the command line

git config --global user.name "ChristopheAnderson"
git config --global user.email "christophewavoeke18@gmail.com"

git remote remove https://github.com/ChristopheAnderson/Mon_Portfolio.git

git add .
git commit -m "nj"
git push origin main

On peut aussi forcer le push 

git push origin main --force

