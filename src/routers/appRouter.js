import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import createExpense from '../components/createExpense';
import dashboard from '../components/dashboard';
import editExpense from '../components/editExpense';
import error from '../components/notFound';

const AppRouter =()=>(
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={dashboard} exact = { true }/>
                    <div>
                        <Route path="/create" component={createExpense} />
                        <Route path="/edit/:id" component={ editExpense } />
                        <Footer />
                    </div>
                    <Route component={error} />
                </Switch>
            </div>
        </BrowserRouter>
    );

export default AppRouter;
