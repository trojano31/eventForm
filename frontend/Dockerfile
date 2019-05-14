FROM node:10.15.3 as react-build
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
ARG API_ENDPOINT
RUN npm run build

FROM nginx:alpine
COPY --from=react-build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
