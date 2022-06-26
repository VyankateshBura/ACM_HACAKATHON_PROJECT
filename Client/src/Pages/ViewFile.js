import React,{useState} from 'react'
import './ViewFile.css';
import { Viewer } from '@react-pdf-viewer/core'; 
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; 
export const ViewFile = () => {
 
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className='container'>
      <h4>View PDF</h4>
      <div className='pdf-container'>
        {<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl="Abstract of Idea Solution.pdf"
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
      </div>

    </div>
  )
}

export default ViewFile