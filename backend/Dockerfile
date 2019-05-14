FROM node:10.15.3
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
ENV PORT=5000
EXPOSE 5000
CMD /bin/bash -c "sleep 10 && node src/index.js"
#CMD ["node", "src/index.js"]
