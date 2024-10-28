import Expedition from "../models/expeditionModel.js";


export const store = async (req, res) => {
    try {
        await Expedition.create(req.body);
        res.json("Create successfull");
    } catch (error) {
        res.status(400).json()
    }
}

export const index = async (req,res) => {
    try {
        const content = await Expedition.find().exec();
        res.json(content);
    } catch (error) {
        res.status(400).json();
    }
}

export const show = async (req, res) => {
    try {
        const content = await Expedition.findById(req.params.id).populate("participants", "speciesFound").exec();
        res.json(content)
    } catch (error) {
        res.status(400).json(error);
    }
}

export const update = async (req, res) => {
    try {
        await Expedition.findByIdAndUpdate(req.params.id).exec();
        res.json("Update with successfull")
    } catch (error) {
        res.status(400).json();
    }
}

export const destroy = async (req,res) => {
    try {
        await Expedition.findByIdAndDelete(req.params.id).exec();
        res.json("Deleted with successfull");
    } catch (error) {
        res.status(400).json();
    }
}