import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number },
    orders:[],
    receivedOrders:[],
    services:[],
    payments:[],
    createdAt: { type: Date, default: Date.now },
    
});

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});

const PaymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    paymentMethod: { type: String, required: true },
    transactionId: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now }
});

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment', required: true },
    status: { type: String, enum: ['pending', 'in-progress', 'completed', 'cancelled'], default: 'pending' },
    orderDate: { type: Date, default: Date.now }
});

const RecentActivitySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, required: true },
    description: { type: String },
    timestamp: { type: Date, default: Date.now }
});






const connectDB = () =>{
    mongoose.connect("mongodb+srv://krishnatiwaridtea:4tc5Jl9REaPq2LgG@cluster0.qv53e.mongodb.net/").then(()=>{
        console.log("DB connected")
    })
}

connectDB()

export const User = mongoose.model("User" , UserSchema);
export const Service = mongoose.model("Service" , ServiceSchema);
export const Payment = mongoose.model("Payment" , PaymentSchema)
export const Order = mongoose.model("Order" , OrderSchema);
export const RecentActivity = mongoose.model("RecentActivity", RecentActivitySchema);

// export default {
    
//     User: mongoose.model('User', UserSchema),
//     Service: mongoose.model('Service', ServiceSchema),
//     Payment: mongoose.model('Payment', PaymentSchema),
//     Order: mongoose.model('Order', OrderSchema),
//     RecentActivity: mongoose.model('RecentActivity', RecentActivitySchema),
// };

// export default {connectDB , user: mongoose.model("User", userSchema) }