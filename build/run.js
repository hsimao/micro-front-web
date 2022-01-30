const childProcess = require("child_process");
const path = require("path");

const filePath = {
  "page-home-vue3": path.join(__dirname, "../page-home-vue3"),
  "page-energy-vue2": path.join(__dirname, "../page-energy-vue2"),
  "page-detail-react15": path.join(__dirname, "../page-detail-react15"),
  "page-login-react16": path.join(__dirname, "../page-login-react16"),
  service: path.join(__dirname, "../service")
};

// 執行所有子應用 start scripts
function runChild() {
  Object.values(filePath).forEach((item) => {
    childProcess.spawn(`cd ${item} && npm start`, {
      stdio: ["inherit", "inherit", "inherit"],
      shell: true
    });
  });
}

runChild();
