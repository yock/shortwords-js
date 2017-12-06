FROM node:carbon-stretch

ENV BUILD_HOME /shortwords
RUN mkdir $BUILD_HOME
WORKDIR $BUILD_HOME

COPY /react $BUILD_HOME/react
RUN mkdir -p $BUILD_HOME/react/dist
VOLUME $BUILD_HOME/react/dist
RUN cd /$BUILD_HOME/react && npm install && npm run build

# Placeholder command in case this container needs to be inspected interactively
CMD ["bash"]
