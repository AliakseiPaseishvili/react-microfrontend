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
