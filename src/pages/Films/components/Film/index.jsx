import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentFilm} from "../../../../store/slices/filmCurrentSlice";

import ImageCamp from '../../../../assets/camp.png'

// const TemplateTitle = ({className, children}) => (
//     <h2 className={className}>
//         {children}
//     </h2>
// )

// const Title = styled(TemplateTitle)`
//     color: green;
//     font-style: italic;
// `

const FilmItem = styled.div`
    border: 1px solid orange;
    padding: 10px;
    border-radius: 15px;
`

const Film = () => {
    const {current, loading, error} = useSelector(state => state.sliceCurrentFilm)
    const dispatch = useDispatch()

    const {id} = useParams()
    // const [currentFilm, setCurrentFilm] = useState({})

    useEffect(() => {
        dispatch(fetchCurrentFilm(id))
    }, [id]);

    return (
        <FilmItem>
            {error ? error : <div>
                {loading ? 'Loading...' : <div>
                    <img src={ImageCamp} alt="camp"/>
                    <img
                        style={{height: 200, width: 200}}
                        src={`${process.env.REACT_APP_API_PATH_IMAGE}/${current.poster_path}`} alt="not found"/>
                    <h2>{current.title}</h2>
                </div>
                }
            </div>
            }
        </FilmItem>
    );
};

export default Film;