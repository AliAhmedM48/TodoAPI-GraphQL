const Task = require('../models/task');

module.exports = {

    Query: {
        // * Read
        tasks: async () => await Task.find(),
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
