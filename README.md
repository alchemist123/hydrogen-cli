# HydrogenJS Framework CLI

[![npm version](https://badge.fury.io/js/hydrogenjs-framework-cli.svg)](https://badge.fury.io/js/hydrogenjs-framework-cli)

**HydrogenJS Framework CLI** is a custom command-line interface tool designed to simplify and accelerate development workflows for Node.js projects and frameworks. This CLI tool provides a seamless experience for developers by offering intuitive commands to create new projects, modules, and handle various other development tasks, making it easier to build and manage projects efficiently.

## 🚀 Features

- **Project Creation**: Quickly scaffold new projects using the `create` command.
- **Module Generation**: Easily add new modules to your project with the `module` command.
- **Version Display**: Check the current version of the CLI tool using the `version` command.
- **Simplified Development Workflow**: Reduce the complexity of setting up projects and modules by using HydrogenJS Framework CLI.

## 📦 Installation

You can install the CLI globally using npm:

```bash
npm install -g hydrogen-fw
Alternatively, use it without installation via npx:
```bash
npx hydrogen-fw

🛠️ Usage
After installation, you can use the following commands to interact with the CLI:
```bash
# Check the current version of HydrogenJS Framework CLI
hydrogen version

# Create a new project with the specified name
hydrogen create <projectName>

# Generate a new module within your project
hydrogen module <moduleName>

📚 Command Reference
Command	Description
hydrogen version	Displays the current version of the CLI tool.
hydrogen create <name>	Creates a new project with the specified name.
hydrogen module <name>	Generates a new module with the specified name in the project.

🧩 Explanation
The CLI comes with multiple commands to streamline your development process:

hydrogen version: Use this command to display the current version of the HydrogenJS Framework CLI.

hydrogen create <projectName>: Creates a new project with the specified name. This command sets up a basic project folder structure, initializes a new Node.js project with a package.json file, and installs necessary dependencies.

hydrogen module <moduleName>: Generates a new module within your project. It scaffolds the required files and folders for the module, making it easy to extend your application with new features.

✨ Examples
Create a New Project
```bash
hydrogen create my-awesome-project

This command creates a new directory called my-awesome-project with a basic folder structure and essential configuration files for starting your project.

Create a New Module
```bash
cd my-awesome-project
hydrogen module user

💡 Contributing
We welcome contributions from the community! If you want to contribute to HydrogenJS Framework CLI, feel free to:

Fork the repository.
Create a new branch for your feature or bug fix.
Submit a pull request with a detailed description of your changes.
Please make sure to follow the Contributor's Guide and adhere to the project's coding standards.

📜 License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

🌐 Links
GitHub Repository
NPM Package
Documentation