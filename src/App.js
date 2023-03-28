import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';



import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    {
                        /* Add Budget component here under */
                        // Budget component
                        <div className='col-sm'>
                            <Budget />
                        </div>
                    }        

                    {
                        /* Add Remaining component here under */
                        //Remaining component
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                    }        

                    {
                        /* Add ExpenseTotal component here under */
                        //ExpenseTotal component
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                    }   

                    {
                        /* Select */
                        <div className='col-sm'>
                            <div className="input-group select-grp">
                                <select className="custom-select select-2" id="inputGroupSelect04">
                                    <option value="$" name="Dollar">$ Dollar</option>
                                    <option value="£" name="Pound" selected>£ Pound</option>
                                    <option value="€" name="Euro">€ Euro</option>
                                    <option value="₹" name="Rupee">₹ Pound</option>
                                </select>
                            </div>
                        </div>
                    }

                    <h3 className='mt-3'>Allocation</h3>
                    {
                        /* Add ExpenseList component here under */
                        <div className='row '>
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        </div>

                    }         

                    {
                        /* Add ExpenseItem component here under */
                    }        

                    <h3 className='mt-3'>Change allocation</h3>
                    {
                        /* Add AllocationForm component here under */
                        <div className='row mt-3'>
                            <div className='col-sm'>
                                <AllocationForm/>
                            </div>
                        </div>
                    }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
