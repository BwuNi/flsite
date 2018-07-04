FROM node:9

# Create app directory
RUN mkdir -p /home/Service
WORKDIR /home/Service

# Bundle app source
COPY . /home/Service
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]

# docker build -t flsite .
# docker run -d -p 3000:3000 flsite