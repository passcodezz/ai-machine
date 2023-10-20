// import React from "react";
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";

// const DownloadPage = () => {
//   const generate = ({ rootElementId }) => {
//     const input = document.getElementById(rootElementId);
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "pt", "a4");
//       pdf.addImage(imgData, 70, 7, 60, 60);
//       pdf.save("referent.pdf");
//     });
//   };

//   return (
//     <span className="grid justify-items-end">
//     <button
//       onClick={generate}
//       type="button"
//       className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//     >
//       Download pdf
//     </button>
//   </span>
//   );
// };

// export default DownloadPage;
