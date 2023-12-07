const Compound  = require("../models/Compound")

const addCompound = async (req, res) => {
    const {name , imgUrl , description} = req.body;
    try {
        const newCompound = await Compound.create({
            name,
            imgUrl,
            description
        });
        res.status(201).json(newCompound);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getCompounds = async (req, res) => {
    try {
        const compounds = await Compound.findAll();
        res.status(200).json(compounds);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getCompound = async (req, res) => {
    try{
        const {id} = req.params;
        const compound = await Compound.findOne({
            where: {id: id}
        });
        res.status(200).json(compound);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const updateCompound = async (req, res) => {
    try{
        const {id} = req.params;
        const {name , imgUrl , description} = req.body;
        const compound = await Compound.update({
            name,
            image: imgUrl,
            description
        }, {
            where: {id: id}
        });
        res.status(200).json(compound);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const deleteCompound = async (req, res) => {
    try{
        const {id} = req.params;
        const compound = await Compound.destroy({
            where: {id: id}
        });
        res.status(200).json(compound);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const getLimitedCompounds = async (req, res) => {
    try{
        const {limit , offset} = req.query;
        const compounds = await Compound.findAll({
           
            limit : parseInt(limit),
            offset : parseInt(offset)
        })
        res.status(200).json(compounds);
    }catch(error){
        res.status(500).json({error: error.message});
    }

}

module.exports = {
    addCompound,
    getCompounds,
    getCompound,
    updateCompound,
    deleteCompound,
    getLimitedCompounds
}


