import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Index from "./components/Index/Index";
import Consult_Device from "./components/Consult_Device/Consult_Device";
import Consult_Pack from "./components/Consult_Pack/Consult_Pack";
import Users from "./components/Users/Users";
import RegisterPack from "./components/RegisterPack/RegisterPack";
import RegisterDevice from "./components/RegisterDevice/RegisterDevice";
import PrivateRoute from "./components/PrivateRoute";
import DeviceList from "./components/Consult_Device/DeviceList";
import UpdatePack from "./components/UpdatePack/UpdatePack";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route component={Login} path="/" exact />
                <PrivateRoute component={Index} path="/index" />
                <PrivateRoute component={Consult_Device} path="/consult-device" />
                <PrivateRoute component={Consult_Pack} path="/consult-pack" />
                <PrivateRoute component={Users} path="/users" />
                <PrivateRoute component={RegisterPack} path="/register-pack" />
                <PrivateRoute component={RegisterDevice} path="/register-device" />
                <PrivateRoute component={DeviceList} path="/device-list" />
                <PrivateRoute component={UpdatePack} path="/update-pack" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
