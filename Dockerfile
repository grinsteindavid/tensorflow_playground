FROM node:12.19.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm@6.14.7
RUN pnpm install

# Bundle app source
COPY . .

# Grant execution permissions
RUN chmod +x ./scripts/*

# Build APP
RUN pnpm build

EXPOSE 3000
CMD [ "node", "dist/server.js" ]