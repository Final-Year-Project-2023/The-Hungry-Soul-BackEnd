const { exec } = require("child_process");

exec("npm -v", (error, version) => {
  if (error) {
    throw error;
  }
  if (parseFloat(version) < 6) {
    throw new Error(
      `[ERROR]: You are using a wrong version of npm. Please update/downgrade to version 6.14.15.\n Your CURRENT VERSION: ${version}`
    );
  }
});