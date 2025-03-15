import express from "express";
import Property from "../models/Property.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

router.post("/upload", upload.single("document"), (req, res) => {
    res.json({ filePath: `/uploads/${req.file.filename}` });
});

const router = express.Router();

// Create Property
router.post("/", authMiddleware, async (req, res) => {
    try {
        const property = new Property({ ...req.body, owner: req.user.id });
        await property.save();
        res.json(property);
    } catch (err) {
        res.status(400).json({ error: "Error adding property" });
    }
});

// Get User Properties
router.get("/", authMiddleware, async (req, res) => {
    const properties = await Property.find({ owner: req.user.id });
    res.json(properties);
});


export default router;
