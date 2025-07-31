import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    // ✅ Use the URI directly without deprecated options
    const uri = process.env.MONGODB_URI
    
    await mongoose.connect(uri, {
      // ✅ Remove deprecated options, keep only necessary ones
      dbName: 'contact' // Specify database name
    })
    
    console.log("🔗 Connecting to MongoDB...")
    console.log("✅ MongoDB connected successfully to 'contact' database")
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message)
    process.exit(1)
  }
}

export default connectDB