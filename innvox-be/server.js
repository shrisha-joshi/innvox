const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const jwt = require('jsonwebtoken'); // You need to install jsonwebtoken: npm install jsonwebtoken

const User = require('./models/User'); // Import the User model
const app = express();
const server = http.createServer(app);
const Event = require('./models/Event'); // Import Event model

const io = socketIo(server, {
  cors: {
    origin: '*', // Replace with your frontend origin(s) in production
    methods: ['GET', 'POST']
  }
});

mongoose.connect('mongodb://localhost:27017/innvox', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));
const Blog = require('./models/Blog'); // Import the Blog model

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*', // Replace with your frontend origin(s) in production
    methods: ['GET', 'POST']
  }
});

// Define a schema for the Item model
const itemSchema = new mongoose.Schema({
 name: String,
 description: String,
});

// Add middleware to parse JSON request bodies
app.use(express.json());

// Create the Item model
const Item = mongoose.model('Item', itemSchema);

// Create a GET route to fetch all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

io.use((socket, next) => {
  const token = socket.handshake.query.token;

  if (!token) {
    return next(new Error('Authentication error: Token not provided'));
  }

  // Verify the JWT
  jwt.verify(token, 'your_jwt_secret', (err, decoded) => { // Replace 'your_jwt_secret' with your actual secret
    if (err) {
      return next(new Error('Authentication error: Invalid token'));
    }
    // Attach the decoded user information to the socket
    socket.user = decoded; // You can access user information via socket.user
    next();
  });
});

io.on('connection', (socket) => {
  console.log('a user connected');
// User CRUD routes

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

  socket.on('sendMessage', (message) => {
    // Basic input validation
    if (typeof message !== 'string' || message.trim() === '') {
      return;
    }

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Event CRUD routes
app.post('/api/events', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/api/events/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const event = await Event.findById(_id);
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/api/events/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const event = await Event.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
  } catch (error) {
    res.status(400).send(error);\n  }\n});\n\napp.delete('/api/events/:id', async (req, res) => {\n  const _id = req.params.id;\n  try {\n    const event = await Event.findByIdAndDelete(_id);\n    if (!event) {\n      return res.status(404).send();\n    }\n    res.send(event);\n  } catch (error) {\n    res.status(500).send(error);\n  }\n});\n

// Get a user by ID
app.get('/api/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a user by ID
app.put('/api/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }

  socket.on('sendMessage', (message) => {
    // Basic input validation
    if (typeof message !== 'string' || message.trim() === '') {
      return;
    }

});

// Delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));