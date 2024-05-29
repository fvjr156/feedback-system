export const Log = {
  info: function (string) {
    console.log(
      "[%cinfo%c] " + string,
      "color: blue; font-weight: bold;",
      "color: black;"
    );
  },
  warning: function (string) {
    console.log(
      "[%cwarning%c] " + string,
      "color: orange; font-weight: bold;",
      "color: black;"
    );
  },
  success: function (string) {
    console.log(
      "[%csuccess%c] " + string,
      "color: green; font-weight: bold;",
      "color: black;"
    );
  },
  error: function (string) {
    console.log(
      "[%cerror%c] " + string,
      "color: red; font-weight: bold;",
      "color: black;"
    );
  },
  debug: function (string) {
    console.log(
      "[%cdebug%c] " + string,
      "color: purple; font-weight: bold;",
      "color: black;"
    );
  },
};
