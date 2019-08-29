import * as React from 'react'
import * as Loadable from 'react-loadable'
import loading from '../../components/Loading'
import Header from '../../components/Header'
import { Route, Switch, withRouter } from 'react-router-dom'
import routes from '../../../controllers'


interface IRoute {
    path: string[],
    exact: boolean,
    title: string
    keywords: string
    description: string
    component: any,
}

class App extends React.Component {
    public state = {

    }

    public routeWithSubRoutes = (route: IRoute, index: number) => (
        <Route
            key={index}
            exact={route.exact || false}
            path={route.path}
            component={Loadable({
                loader: route.component,
                loading
            })}
        />
    )
    public render() {
        return (
            <div className="container">
                <Switch>
                    {routes.map((route, index) =>
                        this.routeWithSubRoutes(route, index)
                    )}
                </Switch>
            </div>

        )
    }
}


export default App