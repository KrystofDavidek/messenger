# Messenger API

This is my crapping, probably not working api...

## Requirements

- Docker

## Database

docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=password postgres:13-alpine

# Setup

## Install deps

npm i

## Migrate database

npm run migrate

## Seeding

npm run seed

## Reset database – after initial seed only just reset the databse

npm run reset

## Select last message with the second contact

npm start
