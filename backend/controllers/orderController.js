import orderModel from './../models/orderModel.js';
import userModel from './../models/userModel.js';

// placing orders using CDD method
const placeOrder = async (req, res) => {


    try {
        const { userId, items, amount, address } = req.body;


        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cardData: {} })

        res.json({ success: true, message: "Order Placed" })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}


// placing orders using Stripe method
const placeOrderStripe = async (req, res) => {

}
// placing orders using  Razorpay method
const placeOrderRazorpay = async (req, res) => {

}

//All orders data for admin panel
const allOrders = async (req, res) => {

}
//User orders data for Frontend
const userOrders = async (req, res) => {
    try {
        

        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true,orders})

    } catch (error) {
                console.log(error);
        res.json({ success: false, message: error.message })

    }
}

//update order status for Admin Panel
const updateStatus = async (req, res) => {

}


export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }