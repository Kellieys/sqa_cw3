import React from 'react';
import './button.css';


function Button({label}) {
    return <button data-testid="button" className="button-search" type="submit">{label}</button>
    
}

export default Button;

// function Button({label}) {
//     return <div data-testid="button">{label}</div>
    
// }