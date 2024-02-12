# TO DO LIST API

This is a simple TO DO LIST API built using Node.js, Express, MongoDB with Mongoose, and GraphQL. It allows users to manage tasks with titles and statuses (to do, in progress, or complete).

## Features

- Create new tasks with titles and default status set to "to do".
- Retrieve a list of all tasks.
- Update the status of a task.
- Delete a task.

## Installation

1. Clone the repository:

```cmd
git clone https://github.com/your-username/todo-list-api.git

Install dependencies and configure environment variables:

cd todo-list-api
npm install

Create a .env file in the root directory of the project and add the following variables:

makefile
PORT=3000
MONGO_URL='mongodb://localhost:27017'

Start the server:

node server.js
