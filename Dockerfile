FROM node:23.4.0-alpine3.20 as firstStep

WORKDIR /app

COPY package.json /app/

RUN npm i

COPY . /app/

ARG URL_BACK
ENV VITE_API_BASE_URL=${URL_BACK:-"http://localhost:3000"}

RUN npm run build

FROM nginx:stable as finalStep

COPY ./nginx/prod.conf /etc/nginx/conf.d/default.conf

COPY --from=firstStep /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]