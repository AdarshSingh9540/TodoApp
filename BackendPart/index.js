const express = require("express");
const { createTodo } = require("./type"); // Corrected import path
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(400).json({ // Changed status code to 400
            message: "You sent the wrong inputs"
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: createPayload.completed || false // Default to false if completed is not provided
    });

    res.json({
        msg: "Todo created"
    });
});

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});

    res.json({
        todos: todos // Return fetched todos
    });
});

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});
