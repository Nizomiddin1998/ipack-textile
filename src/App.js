import React from 'react';
import  {Route,Switch} from 'react-router-dom'
import Navbar from "./components/Navbar";
import CashBox from "./components/CashBox";
import Expense from "./components/Expense";
import Income from "./components/Income";

function App() {
    return (
        <div>
          <Navbar/>

            <Switch>
                <Route component={Income} path={'/kirim'}/>
                <Route component={CashBox} path={'/kassa'}/>
                <Route component={Expense} path={'/'} />
            </Switch>
        </div>
    );
}

export default App;