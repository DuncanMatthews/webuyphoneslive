'use client';

import axios from 'axios';
import { useState } from 'react';
import * as XLSX from 'xlsx';

interface iPhoneDataItem {
  model: string;
  basePrice: number;
  storage: {
    [key: string]: string;
  };
  colors: string[];
  exteriorCondition: {
    [key: string]: string;
  };
}

function iPhoneDataImport() {
  const [jsonOutput, setJsonOutput] = useState<iPhoneDataItem[] | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    try {
      reader.onload = async (e) => {
        const binaryString = e.target?.result;

        if (!binaryString) {
          return;
        }

        const workbook = XLSX.read(binaryString, { type: 'binary' });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName!] as XLSX.WorkSheet;

        const arrayData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as (
          | string
          | undefined
        )[][];

        // Convert undefined values to empty strings
        const sanitizedArrayData = arrayData.map((row) => row.map((cell) => cell ?? ''));

        // Remove empty rows
        const filteredArrayData = sanitizedArrayData.filter((row) =>
          row.some((cell) => cell !== '')
        );

        // Update arrayData with filtered and sanitized data
        arrayData.splice(0, arrayData.length, ...filteredArrayData);

        // Transform 2D array to desired JSON format
        const jsonData: iPhoneDataItem[] = arrayData.slice(1).map((row: unknown[]) => {
          const [
            model,
            basePriceString,
            storageOptions,
            storagePrices,
            colors,
            exteriorConditionOptions,
            exteriorConditionPrices
          ] = row as (string | undefined)[];

          const basePrice = parseFloat(basePriceString!);

          const iphone: iPhoneDataItem = {
            model: model!,
            basePrice: basePrice,
            storage: {},
            colors: (colors || '').split(', '),
            exteriorCondition: {}
          };

          (storageOptions || '').split(', ').forEach((storageOption: string, i: number) => {
            iphone.storage[storageOption] = (storagePrices || '').split(', ')[i] || '';
          });

          (exteriorConditionOptions || '')
            .split(', ')
            .forEach((exteriorConditionOption: string, i: number) => {
              iphone.exteriorCondition[exteriorConditionOption] =
                (exteriorConditionPrices || '').split(', ')[i] || '';
            });

          return iphone;
        });

        setJsonOutput(jsonData);

        // Save data to the server-side file
        try {
          const response = await axios.post('/api/phoneDataUpload/', jsonData);
          console.log(response.data.message);
        } catch (error) {
          console.error('Error saving data:', error);
        }
      };

      reader.readAsBinaryString(file);
    } catch (error) {
      console.error('Error reading file:', error);
    }
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

export default iPhoneDataImport;
