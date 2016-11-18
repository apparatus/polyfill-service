FROM node
ADD /srv/package.json /
RUN npm install --production
ADD srv /
ENV NODE_ENV production
CMD npm start