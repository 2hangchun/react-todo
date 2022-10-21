import { DeleteTaskContext } from './DeleteTaskContext';
import { EnterEditModeContext } from './EnterEditModeContext';
import { ToggleTaskContext } from './ToggleTaskContext';

const Context = (props) => {
    return (
        <DeleteTaskContext.Provider value={props.deleteTask}>
            <EnterEditModeContext.Provider value={props.enterEditMode}>
                <ToggleTaskContext.Provider value={props.toggleTask}>
                    {props.children}
                </ToggleTaskContext.Provider>
            </EnterEditModeContext.Provider>
        </DeleteTaskContext.Provider>
    )
}

export default Context