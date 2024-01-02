// pages/export-macbooks.js

const ExportMacbooks = () => {
  // Function to handle the export action
  const handleExport = async () => {
    const response = await fetch('/api/exportMacbooks', { method: 'POST' });
    // Handle the response
    const data = await response.json();
  };

  return (
    <div>
      <h1>Export Macbooks Data</h1>
      <button onClick={handleExport}>Export to Excel</button>
    </div>
  );
};

export default ExportMacbooks;
