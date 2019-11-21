FROM node:alpine as build

WORKDIR /app

COPY . .
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install
RUN npm run-script build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
