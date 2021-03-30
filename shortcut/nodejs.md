# Manage the version of Node.js on macOS

## n - Recommend

```bash
# Install n using npm
sudo npm install n -g

# Install Node.js (specific version)
sudo n stable
sudo n latest
sudo n 10.24.0
sudo n 12.21.0

# List downloaded versions in cache
n ls

# Specifying Node.js Versions
n 14.16.0

# Removing Versions
sudo n rm 10.24.0
sudo n prune
sudo n uninstall
```



## nvm - Node Version Manager

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

# Verify Installation
command -v nvm

# Usage
nvm install node 	# Install latest version
nvm install 10.24.0 # Install specific version

# Specifying Node.js Versions
nvm use 14.16.0
```



***Reference***

- [how-to-check-and-change-the-nodejs-version-on-ubuntu](https://stackoverflow.com/questions/45632508/how-to-check-and-change-the-nodejs-version-on-ubuntu)
- [n - Interactively Manage Your Node.js Versions](https://www.npmjs.com/package/n)
- [nvm - Node Version Manager](https://github.com/nvm-sh/nvm)

