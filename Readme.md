#backend learning started here   

#steps:

    (SETUP-PROJECT)
1. setip the project files i.e src directory (files and folders)
2. create .env file
3. set prettier integaration 
4. add git and push all the files into it
5. install and add nodemon script into package.json

    (DATABASE CONNECTION)
1. create a db/index.js file
2. write your connectDB function and export it 
3. get back to (main)index.js file and call connectDB in it
// NOTE: of getting error first try to check the correct imorts using file extensions example (index -> index.js)

    (CREATING APP)
1. import express in app.js
2. create app
3. import app in index.js and listen the app
4. install cors and cookie-Parser
5. import and use in app.js
// NOTE: {
    CORS = Cross-origin resource sharing (used for maintaing the integrity to request and response)
    COOKIE-PARSER = it is basically used to perform CRUD operations on user browser from server
}

    (API ERROR HANDLING)
1. go to utils and create ApiError.js to handle all api Errors
2. create an asyncHandler function 
3. added ApiResponse

    (MODEL CREATION)
1. create user and video model

    (Encryption)
1. install jwt and bcrypt
2. import both in user model
3. added few jwt methods in user model

    (ADDING CLOUDINARY)
1. create new cloudinary file in utils
2. add configurations

    (ADDING MULTER)
1. create new file in middleware named multer
2. add configurations 

    (ADD USER CONTROLLER)
