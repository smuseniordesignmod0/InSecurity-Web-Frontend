# InSecurity-Web-Frontend

In order for begin development on this project you will need to install npm and angular CLI.

Use this guide to setup the environment as an Angular 4 app: https://coursetro.com/posts/code/55/How-to-Install-an-Angular-4-App

After you have created your project (with arbitrary name), clone the repository into a temporary folder separated from project, then open the repo and copy everything inside (including the .git folder) into the src folder inside the project, replacing ALL of the contents within. If you know a better way to do this please let me know.

Target your command line to the project folder you created with CLI, and run command

>npm install angular-svg-round-progressbar --save

This allows the progress bar to work, and you only need to run it once.

The command:

>npm start

Starts the server and needs to be rerun if you stop it for any reason.

Each page in the application has its own component folder, where you will do your development (name your feature branch after the page).

I believe npm runs a server at port 4200, so you can access the app at localhost:4200.