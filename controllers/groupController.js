const Group = require('../models/goupModel');
const Counter = require('../models/counterModel');
const createGroup = async (req, res) => {
    try {

        const counter = await Counter.findByIdAndUpdate(
            { _id: 'groupId' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );

        const group = new Group({
            GroupId: counter.seq,
            GroupName: req.body.GroupName,
            GroupTopic: req.body.GroupTopic,
            GroupDescription: req.body.GroupDescription,
            GroupLocation: req.body.GroupLocation,
            GroupImage: req.body.GroupImage
        });

        const groupData = await group.save();
        res.status(200).send({ success: true, msg: 'Group Data', data: groupData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }

}
const getGroups = async (req, res) => {
    try {
        const groups = await Group.find({});
        res.status(200).send({ success: true, msg: 'Groups Data', data: groups });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const getGroupById = async (req, res) => {
    try {
        const id = req.params.id;
        const group = await Group.findOne({ GroupId: id });

        if (!group) {
            return res.status(404).send({ success: false, msg: 'Group not found' });
        }

        res.status(200).send({ success: true, msg: 'Group Data', data: group });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const deleteGroup = async (req, res) => {
    try {
        const id = req.params.id;

        await Group.deleteOne({ GroupId: id });
        res.status(200).send({ success: true, msg: 'Group deleted Successfully !' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const updateGroup = async(req,res)=>{
    try{
        const id = req.params.id;
        const updateData = {
            GroupName: req.body.GroupName,
            GroupTopic: req.body.GroupTopic,
            GroupDescription: req.body.GroupDescription,
            GroupLocation: req.body.GroupLocation,
           
        };

        const group = await Group.findOneAndUpdate({ GroupId: id }, updateData, { new: true });

        if (!group) {
            return res.status(404).send({ success: false, msg: 'Group not found' });
        }

        res.status(200).send({ success: true, msg: 'Group updated successfully', data: group });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

module.exports = {
    createGroup,
    getGroups,
    deleteGroup,
    updateGroup,
    getGroupById
}