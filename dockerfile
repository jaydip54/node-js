FROM node:latest
# WORKDIR /app  // if make a directory in app
# Install nodemon globally
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5000
# // use for static 
# CMD [ "node","index.js" ] 
#use for nodemon  
CMD ["npm", "run","dev"]  











# # Use the Node.js base image
# FROM node:latest

# # Set working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy all other files to the working directory
# COPY . .

# # Ensure bash is available
# RUN apt-get update && apt-get install -y bash

# # Expose port 5000
# EXPOSE 5000

# # Start the application
# CMD [ "npm", "start" ]
