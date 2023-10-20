// import { jsPDF, HTMLOptionImage } from "jspdf";

// const Generatepdf = () => {
//   function generate() {
//     const doc = new jsPDF();
  
//     let split = doc.splitTextToSize(
//       document.getElementById("text").innerText,
//       200
//     );
//     let image = document.getElementById("image").getAttribute('src');

//     doc.text(document.querySelector(".content > h1").innerHTML,75,5);
//     doc.addImage(image,70,7,60,60);
//     doc.text(split,5,75);
//     doc.output("dataurlnewwindow");

//     doc.text("aaaaa", 10, 10);
//     doc.save("test.pdf");
//     doc.addImage(image,70,7,60,60);
//   }
//   return (
//     <span className="">
//       <button
//         onClick={generate}
//         type="button"
//         className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
//       >
//         Download pdf
//       </button>
//     </span>
//   );
// };

// export default Generatepdf;
