# diz que quer uma imagem que tenha o Node na versão 18 instalado (vem o npm e um Debian (sistema base))
# assim não precisa instalar o Node e o npm manualmente
FROM node:18

RUN useradd -m userapp

# diz que vai rodar a apartir da pasta /app (dentro do container)
WORKDIR /app

# copia os arquivos do projeto para dentro do container
# primeiro ponto é o caminho atual
# segundo ponto é o caminho dentro do container (pasta /app)
# tive que colocar dois copys porque ao fazer COPY . . ele tava criando app/app/index.js assim não achava o app/index.js
COPY package*.json ./
RUN npm install
COPY app/ .
COPY views/ ./views

RUN chown -R userapp:userapp /app
USER userapp

# diz que o container usa essa porta
EXPOSE 3000

#comando que roda quando o container for iniciado
CMD ["npm", "start"]