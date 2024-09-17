const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();

cron.schedule(process.env.CRON_SCHEDULE, async () => {
  console.log('cron started at :>> ', getCurrentDate());
  try {
    const response = await axios.get(process.env.API);
    console.log('response :>> ', response);
    console.log('cron finished at :>> ', getCurrentDate());
  } catch (error) {
    console.error('Error fetching data:', error);
    console.log('cron failed at :>> ', getCurrentDate());
  }
});

function getCurrentDate() {
  let dateNow = new Date();
  const formattedDate = dateNow.toISOString().replace('T', ' ').split('.')[0];
  return formattedDate;
}
