import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import contactmodel from './models/contactModel.js'

const app = express()
const port = process.env.PORT || 4000

// ✅ Connect to database
connectDB()

// ✅ Middleware
app.use(express.json())
app.use(cors())

// ✅ Routes
app.get('/', (req, res) => {
    res.send('API WORKING - Contact Service Ready! 🚀')
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, registration_no, message } = req.body;
    console.log("📥 Received POST data:", req.body);
    
    const contact = new contactmodel({ name, email, registration_no, message });
    await contact.save();
    
    console.log("✅ Contact saved successfully");
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('❌ Error saving contact:', error.message);
    
    // ✅ Handle duplicate key errors
    if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0];
        if (field === 'email') {
            return res.status(400).json({
                error: 'Email already exists. Please use a different email address.'
            });
        } else if (field === 'registration_no') {
            return res.status(400).json({
                error: 'Registration number already exists. Please use a different registration number.'
            });
        }
        return res.status(400).json({
            error: 'Duplicate field value entered.'
        });
    }
    
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// ✅ Start server
app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
    console.log(`📍 API endpoint: http://localhost:${port}/api/contact`)
});
