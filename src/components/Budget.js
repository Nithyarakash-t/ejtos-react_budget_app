import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    // const [ budge, setBudge] = useState(' ');

    // function checkValue(target){
    //     if(true){
    //         alert('You cannot reduce the budget value lower than spending');
    //         target.value = 900;
    //     }
    // }
    return (
        <div className='alert alert-secondary'>
            <label>Budget: £ <input type="number" value={budget}> </input></label>
            {/* onChange={(event) => checkValue(event.target)}></ */}
        </div>
    );
};
export default Budget;
