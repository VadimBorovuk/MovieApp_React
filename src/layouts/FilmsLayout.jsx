import {Outlet} from "react-router-dom";

const FilmsLayout = () => {
    return (
        <div className="films-layout">
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default FilmsLayout;