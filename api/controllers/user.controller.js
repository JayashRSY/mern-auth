import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const userController = (req, res, next) => {
    console.log("🚀 ~ file: user.controller.js:2 ~ req:", req);
    try {
        console.log("🚀 ~ file: user.controller a.js:2 ~ req:", req);
    } catch (error) {
        next(error);
    }
}
export const updateUser = (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(403, "Forbidden"));
    }
    try {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }
        User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                profilePicture: req.body.profilePicture,
            }
        }, { new: true });
        const { password, ...userDetails } = updatedUser._doc;
        res.status(200).json({
            success: true,
            message: "User Updated Successfully",
            userDetails
        });
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(403, "Forbidden"));
    }
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "User Deleted Successfully"
        });
    } catch (error) {
        next(error);
    }
}