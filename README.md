git remote add origin (url) (cria uma nova conexão remota com um link)

git status (vê a situação dos arquivos)

git add (nome do arquivo) (adiciona um arquivo especifico, salvando alterações)

git add . (mesma coisa, só que com vários arquivos)

git commit -m "Blablabla" ("Adiciona um nome as alterações, deixando o que foi feito pronto para ser enviado ou commitado")

git commit -m "Titulo" -m "subtitulo" ("Adiciona um nome e um subtítulo pras mudanças, tornando o commit mais organizado")

git push ("Envia as alterações para o repositório")

git clone ("Pega todos os arquivos de um repositório e traz pra pasta onde o bash foi executado")

git pull ("Faz um fetch e um merge ao mesmo tempo, baixando os commits e integrando no projeto")

git branch nome da branch ("Cria nova branch")

git switch -c nova branch e git checkout -b nova branch ("Ambas criam e mudam branches")

git push -u origin main ("manda alterações para a branch principal")

git push -u origin nome da branch ("manda alterações para uma branch específica")

git commit --amend -m "Nova coisa" ("Muda o nome do último commit que foi feito")

git add (arquivo coisado) git commit --amend --no-edit ("Adiciona arquivos esquecidos no último commit")


