import UserModals from "../Modals/User.Modals.js";
import mongoose from "mongoose";

export const Login = async (req, res) => {
    
    try {
        
        const {customerKaEmail, customerKaPassword} = req.body;

        console.log(req.body, "req")
        if(!customerKaEmail|| !customerKaPassword) return res.status(401).json({success:false, message:'all required'})

        const user = await UserModals.findOne({email: customerKaEmail })

        console.log(user)

        if(!user) return res.status(401).json({success:false, message: 'email not found'})

        return res.status(200).json({success:true, message: 'Login SUccessfull'})
    } catch (error) {
        return res.status(500).json({success:false, message:error.message})    
    }

}

export const Register = async (req, res) => {
    // res.send('Register here')
    try {

        const { customerKaName, customerKaEmail, customerKaPassword, customerKaNumber } = req.body;

        console.log(req.body)

        if (!customerKaName || !customerKaEmail || !customerKaPassword || !customerKaNumber) return res.status(401).json({ success: false, message: 'all field required' })

        const customers = new UserModals({
            name: customerKaName,
            email: customerKaEmail,
            password: customerKaPassword,
            number: customerKaNumber
        })

        await customers.save();

        return res.status(200).json({ success: true, message: 'Registration Successfull..' })

    } catch (error) {
        res.status(500).json({ success: false, message: 'registration wrong', error: console.log(error) })
    }
}