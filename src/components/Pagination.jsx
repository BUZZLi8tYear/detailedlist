// import React from 'react'
// import { mergeStyleSets } from '@fluentui/react';





// function Pagination(props) {
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(props.totalSize / props.pageSize); i++) {
//         pageNumbers.push(i);
//     }

//     const paginate = (e) => {
//         props.onPageNumber(e.target.value);
//     };

//     return (
//         <>
//             <label htmlFor="pageSize">Page Size :
//                 <input
//                     id='pageSize'
//                     type='number'
//                     value={props.pageSize}
//                     onChange={(e) => props.onPageSize(e.target.value)}
//                     placeholder='Page Size'
//                     defaultValue={props.pageSize}
//                 ></input>
//             </label>
//             <label htmlFor="pageNumber">Page Number :
//                 <input
//                     id='pageNumber'
//                     type='number'
//                     value={props.pageNumber}
//                     onChange={(e) => props.onPageNumber(e.target.value)}
//                     placeholder='Page Number'
//                     defaultValue={props.pageNumber}
//                 ></input>
//             </label>
//             {/* <div>
//                 <nav>
//                     <ul className={classNames.pagination}>
//                         <li className={classNames.pageItem}>
//                             <span
//                                 onClick={() => paginate(props.pageNumber - 1)}
//                                 className={`${classNames.pageLink} ${props.pageNumber === 1 ? classNames.disabledPageLink : ''}`}
//                             >
//                                 Previous
//                             </span>
//                         </li>
//                         {pageNumbers.map(number => (<>
//                             {(number % 20 === 0) && <br></br>}
//                             <li key={number} className={classNames.pageItem}>
//                                 <span
//                                     onClick={() => paginate(number)}
//                                     className={`${classNames.pageLink} ${props.pageNumber === number ? classNames.activePageLink : ''}`}
//                                 >
//                                     {number}
//                                 </span>
//                             </li>
//                         </>
//                         ))}
//                         <li className={classNames.pageItem}>
//                             <span
//                                 onClick={() => paginate(props.pageNumber + 1)}
//                                 className={`${classNames.pageLink} ${props.pageNumber === pageNumbers.length ? classNames.disabledPageLink : ''}`}
//                             >
//                                 Next
//                             </span>
//                         </li>
//                     </ul>
//                 </nav>
//             </div> */}
            
//         </>

//     );
// }

// export default Pagination;