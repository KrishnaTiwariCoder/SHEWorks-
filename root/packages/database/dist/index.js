"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecentActivity = exports.Order = exports.Payment = exports.Service = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number },
    orders: [],
    receivedOrders: [],
    services: [],
    payments: [],
    createdAt: { type: Date, default: Date.now },
});
const ServiceSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    provider: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});
const PaymentSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    paymentMethod: { type: String, required: true },
    transactionId: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now }
});
const OrderSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    service: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Service', required: true },
    payment: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Payment', required: true },
    status: { type: String, enum: ['pending', 'in-progress', 'completed', 'cancelled'], default: 'pending' },
    orderDate: { type: Date, default: Date.now }
});
const RecentActivitySchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, required: true },
    description: { type: String },
    timestamp: { type: Date, default: Date.now }
});
const connectDB = () => {
    mongoose_1.default.connect("mongodb+srv://krishnatiwaridtea:4tc5Jl9REaPq2LgG@cluster0.qv53e.mongodb.net/").then(() => {
        console.log("DB connected");
    });
};
connectDB();
exports.User = mongoose_1.default.model("User", UserSchema);
exports.Service = mongoose_1.default.model("Service", ServiceSchema);
exports.Payment = mongoose_1.default.model("Payment", PaymentSchema);
exports.Order = mongoose_1.default.model("Order", OrderSchema);
exports.RecentActivity = mongoose_1.default.model("RecentActivity", RecentActivitySchema);
// export default {
//     User: mongoose.model('User', UserSchema),
//     Service: mongoose.model('Service', ServiceSchema),
//     Payment: mongoose.model('Payment', PaymentSchema),
//     Order: mongoose.model('Order', OrderSchema),
//     RecentActivity: mongoose.model('RecentActivity', RecentActivitySchema),
// };
// export default {connectDB , user: mongoose.model("User", userSchema) }
