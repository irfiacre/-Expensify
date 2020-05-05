import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/header';
import createExpense from '../components/createExpense';
import dashboard from '../components/dashboard';
import editExpense from '../components/editExpense';
import helpPage from '../components/helpPage';
import error from '../components/notFound';
 

const AppRouter =()=>{
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={dashboard} exact/>
                    <Route path="/create" component={createExpense} />
                    <Route path="/edit" component={editExpense} >
                         <Route path="/:id" component={editExpense} />
                    </Route>
                    <Route path="/help" component={helpPage} />
                    <Route component={error} exact={true}/>
                </Switch> 
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
