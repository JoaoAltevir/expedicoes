import Explorer from "../models/explorerModel";
import explorerModel from "../models/explorerModel";

export const store = async (req, res) => {
    try {
        await Explorer.create(req.body);
        res.json("Create successfull");
    } catch (error) {
        res.status(400).json()
    }
}

export const index = async (req,res) => {
    try {
        const content = await Explorer.find().exec();
        res.json(content);
    } catch (error) {
        res.status(400).json();
    }
}

export const show = async (req, res) => {
    try {
        const content = await Explorer.findById(req.params.id).exec();
        res.json(content)
    } catch (error) {
        res.status(400).json(error);
    }
}

export const update = async (req, res) => {
    try {
        await Explorer.findByIdAndUpdate(req.params.id).exec();
        res.json("Update with successfull")
    } catch (error) {
        res.status(400).json();
    }
}

export const destroy = async (req,res) => {
    try {
        await Explorer.findByIdAndDelete(req.params.id).exec();
        res.json("Deleted with successfull");
    } catch (error) {
        res.status(400).json();
    }
}