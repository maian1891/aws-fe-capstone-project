This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Set Environment Variables in Mac/Linux
#### Instructions
1. Use the `set_env.sh` file present in the `project/` directory to configure these values on your local machine. This is a file that has been set up for your convenience to manage your environment.
2. Prevent this file from being tracked in `git` so that your credentials don't become stored remotely:
   ```bash
   # Stop git from tracking the set_env.sh file
   git rm --cached set_env.sh

   # Prevent git from tracking the set_env.sh file
   echo *set_env.sh >> .gitignore
   ```
3. Running the command `source set_env.sh` will set your environment variables.
     > Note: The method above will set the environment variables temporarily. Every time you open a new terminal, you will have to run `source set_env.sh` to reconfigure your environment variables
#### Verify Configurations
1. Set the configuration values as environment variables:
```bash
source set_env.sh
```
2. Verify that environment variables were set by testing one of the expected values:
```bash
echo $POSTGRES_USERNAME
```

### Set Environment Variables in Windows
Set all the environment variables as shown in the `set_env.sh` file either using the **Advanced System Settings** or d GitBash/WSL terminal.

Below is an example. Make sure that you replace the values with ones that are applicable to the resources that you created in AWS.
```bash
setx AWS_ACCESS_KEY_ID postgres
setx AWS_SECRET_ACCESS_KEY postgres
```

### You can build docker files with command line arguments:
docker build -t fe-capstone .

### You can run docker with command line arguments:
docker run -d --rm -p 3000:8080 fe-capstone

### Open URL
http://localhost:3000/
