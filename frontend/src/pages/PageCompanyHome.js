// import { useEffect } from "react";
// import { useState } from "react";
// import {
//   Table,
//   TableContainer,
//   Tbody,
//   Td,
//   Th,
//   Thead,
//   Tr,
// } from "../components/DataTableStyled";
// import {
//   Content,
//   ContentBody,
//   ContentHead,
//   Wrapper,
// } from "../style/Content";
// import ServicioDato from "../services/ServicioDato";

// const PageCompanyHome = function () {
//   const PageTitle = "Compañias";

//   // State Company
//   const [company_state, setCompany_state] = useState([]);
//   // State Error
//   const [error, setError] = useState(null);
//   // State is Loading
//   const [is_loading, setIs_loading] = useState(true);

//   const { companies } = company_state;

//   async function PullData() {
//     try {
//       await ServicioDato.ObtenerLista().then((response) => {
//         // console.log(response.data);
//         setCompany_state({ companies: response.data });
//       });
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIs_loading(!is_loading);
//     }
//   }

//   useEffect(function () {
//     PullData();
//   }, []);

//   return (
//     <Wrapper>
//       <Content>
//         <ContentHead>
//           <h1>Compañias</h1>
//         </ContentHead>
//         <ContentBody>
//           <TableContainer>
//             <Table>
//               <Thead>
//                 <Tr>
//                   <Th>ID</Th>
//                   <Th>Razón Social</Th>
//                   <Th>Nombre Comercial</Th>
//                   <Th>Alias</Th>
//                   <Th>R.N.C.</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {Array.isArray(companies)
//                   ? companies.map((company, index) => (
//                       <Tr key={index}>
//                         <Td>{company.companiaId}</Td>
//                         <Td>{company.razonSocial}</Td>
//                         <Td>{company.nombreComercial}</Td>
//                         <Td>{company.alias}</Td>
//                         <Td>{company.rnc}</Td>
//                       </Tr>
//                     ))
//                   : null}
//               </Tbody>
//             </Table>
//           </TableContainer>
//           {/* <Console stateName={company_state} /> */}
//         </ContentBody>
//       </Content>
//     </Wrapper>
//   );
// };
// export default PageCompanyHome;
