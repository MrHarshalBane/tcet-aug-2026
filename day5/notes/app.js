const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Middleware to parse JSON bodies

// MySQL Connection Configuration
const db = mysql.createConnection({
    host: 'localhost',
    port: 3307, // Default MySQL port
    user: 'root', // Replace with your MySQL username
    password: 'qwerasdf', // Replace with your MySQL password
    database: 'company'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Successfully connected to the MySQL database.');
});

// --- API ROUTES ---

// Get All Employees (GET /api/employees)
app.get('/api/employees', (req, res) => {
    const sql = 'SELECT * FROM employees';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Add a New Employee (POST /api/employees)
app.post('/api/employees', (req, res) => {
    const { name, department, salary } = req.body;
    const sql = 'INSERT INTO employees (name, department, salary) VALUES (?, ?, ?)';
    
    db.query(sql, [name, department, salary], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ 
            message: 'Employee added successfully',
            employeeId: result.insertId 
        });
    });
});

// Get a Single Employee by ID (GET /api/employees/:id)
app.get('/api/employees/:id', (req, res) => {
    const sql = 'SELECT * FROM employees WHERE id = ?';
    db.query(sql, [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Employee not found' });
        res.json(results[0]);
    });
});

// Update an Employee (PUT /api/employees/:id)
app.put('/api/employees/:id', (req, res) => {
    const { name, department, salary } = req.body;
    const sql = 'UPDATE employees SET name = ?, department = ?, salary = ? WHERE id = ?';
    db.query(sql, [name, department, salary, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });
        res.json({ message: 'Employee updated successfully' });
    });
});

// Delete an Employee (DELETE /api/employees/:id)
app.delete('/api/employees/:id', (req, res) => {
    const sql = 'DELETE FROM employees WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });
        res.json({ message: 'Employee deleted successfully' });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});