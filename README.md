# Frontend microtasks
This is project about micro frontend.
It build with:

- webpack
- react
- tailwindcss
- flowbite-react 
- typescript

## Launch
 There are 3 folders: 

- main
- users
- weather

In each folder you need to run next command: `npm i` to install all dependencies.

To start the project in each folder you need to run next command: `npm run start`

There will be launched 3 servers with next ports:

- http://localhost:3000/
- http://localhost:3001/
- http://localhost:3002/

## Project Description

This is project that gives example how micro frontend works.

To make it possible I used `npx create-mf-app` command.
With it I created 3 projects:

- main
- users
- weather

`main` project is the main, where we need to load all other applications.

Initially they are not connected between each other.
To make this happen we need to open `webpack.config.js` in `users` and in `weather` and add into ModuleFederationPlugin next config:

Example for `users`

```javascript
 new ModuleFederationPlugin({
      name: "users",
      filename: "users-app.js",
      remotes: {},
      exposes: {
        "./UsersApp": "./src/App.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
```

Here you can see that I used `exposes` property, where I export components and give names to them. As I need to share full features with main project, I export feature from `App.tsx`

The same I did for `weather` feature.

In `main` folder inside `webpack.config.js` I also update ModuleFederationPlugin, where I added `remotes` property:

```javascript
  new ModuleFederationPlugin({
      name: "main",
      filename: "main.js",
      remotes: {
        "users": "users@http://localhost:3001/users-app.js",
        "weather":"weather@http://localhost:3002/weather-app.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    })
```

Also you can see that it is important to have different routes for each project.

To load `users` and `weather` features I used next logic:

```javascript
import React, { Suspense } from "react";

const Users = React.lazy(() => import("users/UsersApp"));
const Weather = React.lazy(() => import("weather/WeatherApp"));

export const Layout = () => {
  return (
    <>
      <Suspense fallback={<span>Loading Users</span>}>
        <Users />
      </Suspense>
      <Suspense fallback={<span>Loading Weather</span>}>
        <Weather />
      </Suspense>
    </>
  );
};
```