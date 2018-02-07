FROM node:alpine

WORKDIR /app/
EXPOSE 3000
VOLUME ["/app/"]
CMD ["sh","./start.sh"]
