import React, {useCallback, useEffect, useRef, useState} from 'react';
// import {useSelector} from "react-redux";
// import qs from "qs";
// import {Alert, Backdrop, CircularProgress, Snackbar} from "@mui/material";
// import View from "../../components/FilmsView/View";
// import {ContentBlock, ContentDiscover, MainDiscover} from "./styled";
// import {useTranslation} from "react-i18next";
// import {useNavigate} from "react-router-dom";
// import Filters from "../../components/FilmsView/Filters";
// import {useAppDispatch} from "../../redux/store";
// import {
//   setCurrentPage,
//   setFilters,
//   resetFilters
// } from "../../redux/filter/slice";
// import {selectFilter} from "../../redux/filter/selectors";
// import {FilterSliceState} from "../../redux/filter/types";
// import {fetchDiscoverMovies} from "../../redux/discoverMovies/asyncActions";
// import {selectDiscoverMovies} from "../../redux/discoverMovies/selectors";
//
//
// const DiscoverPage = () => {
//   const {t} = useTranslation();
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch()
//
//   const {page, with_genres, primary_release_year, sort_by} = useSelector(selectFilter)
//   const {loading, error, data} = useSelector(selectDiscoverMovies)
//   const isMounted = useRef(false)
//   const isSearch = useRef(false)
//
//   const [genreLabel, setGenreLabel] = useState([]);
//   const [yearLabel, setYearLabel] = useState<string | number | undefined>('');
//   const [sortLabel, setSortLabel] = useState('');
//
//   const getParamsFromFilter = (params: FilterSliceState) => {
//     console.log(params)
//     dispatch(
//         setFilters(params)
//     )
//   }
//
//   useEffect(() => {
//     if (window.location.search) {
//       const params = (qs.parse(window.location.search.substring(1)) as unknown) as FilterSliceState
//       getParamsFromFilter(params)
//       setYearLabel(params.primary_release_year)
//       isSearch.current = true
//     }
//   }, [])
//
//   useEffect(() => {
//     if (isMounted.current) {
//       const queryString = qs.stringify({
//         page,
//         with_genres,
//         primary_release_year: primary_release_year,
//         sort_by: sort_by
//       })
//       navigate(`?${queryString}`)
//     }
//     isMounted.current = true
//   }, [page, with_genres, primary_release_year, sort_by]);
//
//   useEffect(() => {
//     window.scrollTo(0, 0)
//     if (!isSearch.current) {
//       getMovies()
//     }
//     isSearch.current = false
//   }, [sort_by, primary_release_year, with_genres, page]);
//
//
//   const getMovies = () => {
//     const params = {
//       page,
//       sort_by,
//       primary_release_year,
//       with_genres,
//       language: localStorage.getItem('lang') || 'en'
//     }
//
//     dispatch(fetchDiscoverMovies(params))
//   }
//   const [filtersCopy, setFiltersCopy] = useState(false)
//   const [errEmptyFilters, setErrEmptyFilters] = useState(false)
//
//   // @ts-ignore
//   const {genres} = useSelector(state => state.sliceGenreList)
//   // @ts-ignore
//
//   const handleChangeGenre = (event: any) => {
//     const {target: {value}} = event;
//     // setGenres(
//     //     typeof value === 'string' ? value.split(',') : value,
//     // );
//   };
//
//   const handleChangeYear = (event: any) => {
//     const {target: {value}} = event;
//     setYearLabel(value);
//   };
//
//   const handleChangeSort = (event: any) => {
//     const {target: {value}} = event;
//     setSortLabel(value)
//   };
//
//
//   const handlePagination = useCallback((page: number) => {
//
//     // @ts-ignore
//     dispatch(setCurrentPage(page))
//   }, [])
//
//   const showFilters = () => {
//     getParamsFromFilter({
//       page: 1,
//       sort_by: sortLabel,
//       primary_release_year: yearLabel,
//       with_genres: genreLabel,
//       language: localStorage.getItem('lang') || 'en'
//     })
//     getMovies()
//     // if ((!!primary_release_year || primary_release_year) || !!sort_by) {
//     //   getMovies()
//     //
//     //   setErrEmptyFilters(false)
//     // } else {
//     //   setErrEmptyFilters(true)
//     // }
//   }
//
//   const clearFilters = () => {
//     dispatch(resetFilters())
//     getMovies()
//   }
//
//
//   return (
//       <MainDiscover>
//         <ContentDiscover>
//           {loading ? <Backdrop
//                   sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
//                   open={true}
//               >
//                 <CircularProgress color="inherit"/>
//               </Backdrop> :
//               <ContentBlock maxWidth="xl">
//                 <Filters
//                     t={t}
//                     genres={genres}
//                     genreLabel={genreLabel}
//                     yearLabel={yearLabel}
//                     sortLabel={sortLabel}
//                     handleChangeGenre={handleChangeGenre}
//                     handleChangeYear={handleChangeYear}
//                     handleChangeSort={handleChangeSort}
//                     showFilters={showFilters}
//                     clearFilters={clearFilters}
//                     setFiltersCopy={setFiltersCopy}
//                     filtersCopy={filtersCopy}
//                 />
//
//                 <View
//                     title="discover"
//                     page={page}
//                     genres={genres}
//                     handlePagination={handlePagination}
//                     films={data}
//                 />
//               </ContentBlock>
//           }
//         </ContentDiscover>
//
//         <Snackbar
//             open={filtersCopy}
//             autoHideDuration={2000}
//             anchorOrigin={{vertical: 'top', horizontal: 'center'}}
//             onClose={() => setFiltersCopy(false)}>
//           <Alert
//               onClose={() => setFiltersCopy(false)}
//               severity={'success'}
//               variant="filled"
//               sx={{width: '100%'}}
//           >
//             {t('t.tip.copy.filters')}
//           </Alert>
//         </Snackbar>
//
//         <Snackbar
//             open={errEmptyFilters}
//             autoHideDuration={3000}
//             anchorOrigin={{vertical: 'top', horizontal: 'center'}}
//             onClose={() => setErrEmptyFilters(false)}>
//           <Alert
//               onClose={() => setErrEmptyFilters(false)}
//               severity={'error'}
//               variant="filled"
//               sx={{width: '100%'}}
//           >
//             {t('t.err.empty.filters')}
//           </Alert>
//         </Snackbar>
//       </MainDiscover>
//   );
// };
//
// export default DiscoverPage
