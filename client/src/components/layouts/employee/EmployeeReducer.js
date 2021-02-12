import {
    ADD_EMP,         
    DELETE_EMP,      
    UPDATE_EMP,      
    SET_CURRENT,     
    CLEAR_CURRENT_EMP,
    FILTER_EMP,      
     CLEAR_FILTER_EMP,
    SET_ALERT,       
    CLEAR_ALERT,     
    SET_CURRENT_EMP
} from './actions';

export default (state,action) =>{
    switch (action.type) {
        case ADD_EMP:
            return{
                ...state,
                employees: [...state.employees, action.payload]
            };
        case DELETE_EMP:
        return{
            ...state,
            employees: state.employees.filter(
                employee => employee.id !== action.payload
                )
        };
        case SET_CURRENT_EMP:
        return{
            ...state,
            current: action.payload                
        };
        case CLEAR_CURRENT_EMP:
        return{
            ...state,
            current: null               
        };
        case UPDATE_EMP:
            return{
                ...state,
                employee: state.employees.map(employee => employee.id === action.payload.id ? action.payload : employee)  
            };
        case FILTER_EMP:
            return{
                ...state,
                filtered: state.employees.filter(employee =>{
                    const regex = new RegExp(`${action.payload}`,'gi');
                    return ( employee.name.match(regex) ||
                     employee.email.match(regex) ||
                      employee.designation.match(regex)
                    );
                })
            };
        case CLEAR_FILTER_EMP:
            return{
                 ...state,
                 filtered: null
            }; 
        default:
            return state;
    }
}