import ApiSuccess from '../utils/apiSuccess.js';

const healthCheck = (req, res) => {
  const uptimeInSeconds = Math.floor(process.uptime());
//   const formatedDate = formatDate(uptimeInSeconds);
  res.status(200).json(ApiSuccess.success('Success', { uptime: formatDate }));
};

const formatDate = seconds => {
  const day = Math.floor(seconds / (3600 * 24));
  const hour = Math.floor((seconds % (3600 * 24)) / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  const second = seconds % 60;
  return `${day}d ${hour}h ${minute}m ${second}s`;
};

export default healthCheck;
