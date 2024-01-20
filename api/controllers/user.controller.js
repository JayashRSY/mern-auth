export const userController = (req, res, next) => {
    console.log("🚀 ~ file: user.controller.js:2 ~ req:", req);
    try {
        console.log("🚀 ~ file: user.controller a.js:2 ~ req:", req);
    } catch (error) {
        next(error);
    }
}