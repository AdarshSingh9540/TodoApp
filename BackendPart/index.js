const express = require("express");
const { createTodo } = require("./type"); 
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(400).json({
            message: "You sent the wrong inputs"
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: createPayload.completed || false 
    });

    res.json({
        msg: "Todo created"
    });
});

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});

    res.json({
        todos: todos 
    });
});

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});
