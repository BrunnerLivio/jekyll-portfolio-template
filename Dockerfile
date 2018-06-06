FROM node:7.10.1 as source
WORKDIR /src/portfolio
COPY package.json ./
RUN npm i -g yarn
RUN yarn
COPY . ./
RUN npm run build

FROM jekyll/builder:latest
WORKDIR /var/lib/portfolio
COPY --from=source /src/portfolio/dist ./
COPY ./src ./
RUN chown -R jekyll ./
RUN bundle install
ENTRYPOINT [ "jekyll" ]
CMD [ "serve" ]
