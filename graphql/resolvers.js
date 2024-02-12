const Task = require('../models/task');
const connectDB = require("../db");
const mongoose = require("mongoose")

module.exports = {

    Query: {
        // * Read

        tasks: async () => {
            connectDB();
            return await Task.find().then((tasks) => {
                mongoose.connection.close()
                    .then(() => console.log("closed"))
                return tasks;
            })


        },
        task: async ({ id }) => await Task.findById(id),

    },
    Mutation: {
        // * Write
        createTask: async ({ title }) => {
            const task = new Task({ title });
            await task.save();
            return task;
        },
        updateTaskStatus: async ({ id, status }) => {
            return await Task.findByIdAndUpdate(id, { status }, { new: true });
        },
        deleteTask: async ({ id }) => {
            return await Task.findByIdAndDelete(id);
        },
    }
}
