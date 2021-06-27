const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  // return results;

  const results = Promise.all(
		urls.map(async (url) => {
			try {
        // Get request from url, generate { [key] : message } object
        const res = await httpGet(url);
        var key = "";
        const message = JSON.parse(res.body).message;
        
        if (res.status == 200) {
          key = "Arnie Quote";
        } else {
          key = "FAILURE";
        }
        return { [key]: message };

			} catch (err) {
				console.log("Error(getArnieQuotes): ", err);
			}
		})
	);

  return results;
};

module.exports = {
  getArnieQuotes,
};