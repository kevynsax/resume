FROM node:20 AS build

WORKDIR /app

COPY . .
ENV PATH=/app/node_modules/.bin:$PATH

RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
