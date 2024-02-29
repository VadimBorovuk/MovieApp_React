import {useDispatch, useSelector} from "react-redux";
import {minusCount, plusCount} from "../../store/slices/countSlice";
import {useTranslation} from "react-i18next";

const Home = () => {
    const count = useSelector(s=> s.sliceCount.count)
    const dispatch = useDispatch()
    //
    return (
        <div>
            {/*<h2>{t('Welcome to React')}</h2>;z/z*/}
           <div key="count"> count {count}</div>
            <button onClick={()=> dispatch(plusCount())}>+</button>
            <button onClick={()=> dispatch(minusCount())}>-</button>
        </div>
    );
};

export default Home;