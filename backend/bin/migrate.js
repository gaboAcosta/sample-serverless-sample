
const { migrate } = require('../migrations');

(async () => {
  await migrate()
})();