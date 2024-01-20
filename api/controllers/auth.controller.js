import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = bcryptjs.hashSync(password, 12); // hashSync is asynchronous (no need for await)
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: newUser,
        })
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const validUser = await User.findOne({ email });
        if (!validUser) next(errorHandler(404, "User not found"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) next(errorHandler(401, "Invalid password"));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        const { password: hashedPassword, ...userDetails } = validUser._doc;
        res.cookie('accessToken', token, { httpOnly: true })
            .status(200)
            .json({
                success: true,
                message: "User logged in successfully",
                user: userDetails,
            })
    } catch (error) {
        next(error);
    }
}