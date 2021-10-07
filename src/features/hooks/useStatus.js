import {changeFilterStatus} from "../reducerSilces/filtersSlice";
import {useDispatch} from "react-redux";

export default function useStatus() {
    const dispatch = useDispatch();
    return [
        {onClick: (e) => dispatch(changeFilterStatus(e.target.innerHTML))}
    ]
}