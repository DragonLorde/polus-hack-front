FROM node:16.16.0-alpine@sha256:9a2db0008b592cfde1b98aa8972a8051ccb80bb51dde8b06c3a2e3762794e89c as build
RUN ls -la /root/node_modules || echo "node_modules dir isn't mounted" && tr -dc A-Za-z0-9 </dev/urandom | head -c 13 ; echo ''
WORKDIR /root
ENV PATH /root/node_modules/.bin:$PATH
COPY . /root/
RUN apk --no-cache add git && yarn --update-checksums
RUN yarn add serve
RUN yarn
RUN yarn build
CMD ["serve", "-s", "build"]