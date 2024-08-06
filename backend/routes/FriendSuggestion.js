const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');

const router = express.Router();

async function suggestFriends(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      console.error('User not found:', userId);
      return [];
    }

    const ageRange = { min: user.age - 2, max: user.age + 2 };
    const governorat = user.governorat;
    const interests = user.interests;

    // Construct query for matching governorat
    const query = {
      governorat: governorat,
      _id: { $ne: userId } // Exclude the current user
    };

    // Apply optional filters
    if (interests.length > 0) {
      // Use $in to find users with at least one matching interest
      query.interests = { $in: interests } ;
    }
    if (user.age) {
      query.$or = query.$or || [];
      query.$or.push({ age: { $gte: ageRange.min, $lte: ageRange.max } });
    }

    const suggestedFriends = await User.find(query);

    console.log('Suggested friends:', suggestedFriends);
    return suggestedFriends;
  } catch (error) {
    console.error('Error in suggestFriends function:', error);
    return [];
  }
}


  router.get('/suggest-friends/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const friends = await suggestFriends(userId);
      res.json(friends);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


module.exports = router;