FROM node:10.16.0 as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN sudo npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html