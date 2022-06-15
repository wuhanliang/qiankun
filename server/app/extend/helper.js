// import moment from "moment";
const moment = require("moment");

module.exports = {
  formatDateTime: (dateTime, format = "YYYY-MM-DD HH:mm:ss") => {
    return moment(dateTime).format(format);
  },
};
