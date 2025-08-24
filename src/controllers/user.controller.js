import  asyncHandler  from '../utils/asyncHandler.js';

const signup = asyncHandler(async (req, res) => {
  res.send('Hey Sakib');
});

export default signup;
