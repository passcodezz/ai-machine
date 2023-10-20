// import React from "react";
// import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import img1 from "../public/asset/1.png";
// import img2 from "../public/asset/total.png";
// import img3 from "../public/asset/3.png";
// import img4 from "../public/asset/4.png";
// import img5 from "../public/asset/5.png";
// import img6 from "../public/asset/6.png";
// import img7 from "../public/asset/7.png";
// import img8 from "../public/asset/8.png";
// import img10 from "../public/asset/10.png";
// import img11 from "../public/asset/11.png";
// import img12 from "../public/asset/12.png";
// import img13 from "../public/asset/13.png";
// import img14 from "../public/asset/14.png";
// import img15 from "../public/asset/15.png";
// import img16 from "../public/asset/16.png";
// import img17 from "../public/asset/17.png";

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: "justify",
//     fontFamily: "Times-Roman",
//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "grey",
//   },
//   pageNumber: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//   },
// });

// const PDFFile = () => {
//   return (
//     <Document>
//       <Page style={styles.body}>
//         <Text style={styles.header} fixed></Text>
//         <Text style={styles.text}>KONKLOM GIVE YOU MORE</Text>
//         <Image style={styles.image} src={img1} />
//         <Text style={styles.text}> VISION</Text>
//         <Text style={styles.text}> Project</Text>
//         <Text style={styles.text}> Fraud and Risk Management (1)</Text>
//         <Text style={styles.text}> Fraud and Risk Management (2)</Text>
//         <Text
//           style={styles.pageNumber}
//           render={({ pageNumber, totalPages }) =>
//             `${pageNumber} / ${totalPages}`
//           }
//         />
//       </Page>
//     </Document>
//   );
// };

// export default PDFFile;
