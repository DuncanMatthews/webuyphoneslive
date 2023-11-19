'use client';

import axios from 'axios';
import { useState } from 'react';
import * as XLSX from 'xlsx';

function ExcelToJsonConverter() {
  const [jsonOutput, setJsonOutput] = useState<any[] | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = async (e) => {
      const binaryString = e.target?.result as string;
      const workbook = XLSX.read(binaryString, { type: 'binary' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName!] as XLSX.WorkSheet;

      const arrayData = XLSX.utils.sheet_to_json<any[]>(worksheet, { header: 1 });

      const jsonData = arrayData.slice(1).map((row) => {
        return {
          model: row[0],
          screenSize: row[1],
          releaseDate: row[2],
          basePrice: parseFloat(row[3]),
          processor: {
            type: row[4],
            price: row[5] || null
          },
          ram: {
            size: row[6],
            price: row[7] || null
          },
          storage: {
            type: row[8],
            price: row[9] || null
          },
          gpu: {
            type: row[10] || null,
            price: row[11] || null
          }
        };
      });

      setJsonOutput(jsonData);

      // Save data to the server-side file
      try {
        const response = await axios.post('/api/macbookDataUpload', jsonData);
        console.log(response.data.message);
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" accept=".xls,.xlsx" onChange={handleFileUpload} />
      <pre>
        {jsonOutput
          ? JSON.stringify(jsonOutput, null, 2)
          : 'Upload an Excel file to view JSON output.'}
      </pre>
    </div>
  );
}

export default ExcelToJsonConverter;
