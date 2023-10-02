module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "aceacadFrontend.pem",
      user: "ubuntu",
      host: "52.66.246.139",
      ref: "origin/main",
      repo: "https://github.com/ace-olympiads/frontend-web.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
