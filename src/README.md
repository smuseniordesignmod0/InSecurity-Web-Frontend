# InSecurity-Web-Frontend

In order for begin development on this project you will need to install npm and angular CLI.

Use this guide to setup the environment as an Angular 4 app: https://coursetro.com/posts/code/55/How-to-Install-an-Angular-4-App

After you have created your project (with arbitrary name), clone the repository into a temporary folder separated from project, then open the repo and copy everything inside (including the .git folder) into the src folder inside the project, replacing ALL of the contents within. If you know a better way to do this please let me know.

Angular material might not automatically import dependencies even though its in the package.json, so use the following commands to ensure the project works:

>npm install --save @angular/material @angular/cdk

>npm install --save angular/material2-builds angular/cdk-builds

>npm install --save @angular/animations

Target your command line to the project folder you created with CLI, and run command

>npm start

Each page in the application has its own component folder, where you will do your development (name your feature branch after the page).

I believe npm runs a server at port 4200, so you can access the app at localhost:4200.