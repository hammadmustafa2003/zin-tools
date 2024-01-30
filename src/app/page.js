import CustomNavbar from "./components/navbar"
import CarousolList from "./components/carousolList"
import Footer from "./components/footer";
import SubNavbar from "./components/SubNavbar";

import wordIcon from "../../public/word-pdf.svg";
import excelIcon from "../../public/Excel-PDF.svg";
import jpgIcon from "../../public/jpg-pdf.svg";
import pptIcon from "../../public/PPT-pdf.svg";
import excelPUBIcon from "../../public/Excel-PUB.svg";
import imageInRtx from "../../public/image-in-RTX.svg";

export default function Page() {

  const cardInfo = [
    { icon: wordIcon, title: "Word to PDF", description: "The best word to PDF converter online" },
    { icon: pptIcon, title: "PPT to PDF", description: "Convert Powerpoint to PDF online." },
    { icon: excelIcon, title: "Excel to PDF", description: "Easily convert Excel spreadsheet to PDF" },
    { icon: jpgIcon, title: "JPG to PDF", description: "Convert JPG, PNG, BMP, GIF and TIFF images to PDF." },
    { icon: excelPUBIcon, title: "PUB to PDF", description: "Convert Publisher to PDF document." },
    { icon: imageInRtx, title: "RTF to PDF", description: "Convert RTF file to PDF online for free." }
  ];

  return (
    <div className="light">
      <CustomNavbar />
      <SubNavbar />
      <CarousolList cardInfo={cardInfo}/>
      <CarousolList cardInfo={cardInfo}/>
      <Footer />
    </div>
  )
}