var fmt = require('util').format;

var colors = {
  BLACK: "\x1b[30m",
  RED: "\x1b[31m",
  GREEN: "\x1b[32m",
  YELLOW: "\x1b[33m",
  BLUE: "\x1b[34m",
  MAGENTA: "\x1b[35m",
  CYAN: "\x1b[36m",
  WHITE: "\x1b[37m",
  RESET: "\x1b[0m"
};

var bgs = {
  BLACK: "\x1b[40m",
  RED: "\x1b[41m",
  GREEN: "\x1b[42m",
  YELLOW: "\x1b[43m",
  BLUE: "\x1b[44m",
  MAGENTA: "\x1b[45m",
  CYAN: "\x1b[46m",
  WHITE: "\x1b[47m",
};

module.exports = function(level, name, args) {
  var msg = fmt.apply(null, args).replace(/\n|\r/g, ' ');
  // level = level.substr(0, 3);
  var color;
  switch (level) {
    case "DEBUG":
      {
        color = colors.MAGENTA;
        break;
      }
    case "INFO":
      {
        color = colors.CYAN;
        break;
      }
    case "NOTICE":
      {
        color = colors.YELLOW;
        break;
      }
    case "WARNING":
      {
        color = colors.YELLOW;
        break;
      }
    default:
      {
        color = colors.RED;
      }
  }

  var arr = name.split('/');
  var formattedName = arr.splice(arr.length - 1)[0];

  return fmt(formattedName, '-', JSON.stringify(new Date()).substr(1, 19),
    color + level + colors.RESET, msg + colors.RESET);
};
