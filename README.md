# starWarsFanClubServer
Backend for star wars fan club app
Setting app the project:
Important: Node.js must be installed in order to run the project

1.Create folder where you want to clone the project.

2. Checkout project in terminal (git bash, cmd...) with command

  git clone https://github.com/fever2288/starWarsFanClubServer.git

3. In terminal go to cloned project and install dependencies with

  npm install

4. There is .env file where PORT that application will use can be set. It is set to 5042 currently. If it fails to load file it will be set to 3000. When server is started used port will be logged in format "Listening on PORT + port number"

5. To start the server, in terminal run the command npm start

6. To view swagger documentation for APIs you can visit http://localhost:5042/api-docs/ in your browser. If PORT number is changed in step 4, it should be changed in url for documentation but also in swagger.yaml which is in root of the project. The PORT should be changed on line 12. This is needed so APIs can be tested from browser. 
