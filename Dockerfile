FROM node:22 AS build

WORKDIR /app

COPY . .
ENV PATH=/app/node_modules/.bin:$PATH

RUN npm install --silent
RUN npm run-script build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
