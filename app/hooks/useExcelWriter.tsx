'use client'
import { useCallback } from 'react';
import * as XLSX from 'xlsx';

const useExcelWriter = () => {
    const exportToExcel = useCallback((data: any[], fileName: string) => {
        // Membuat worksheet dari data JSON
        const worksheet = XLSX.utils.json_to_sheet(data);
        
        // Membuat workbook dan menambahkan worksheet ke dalamnya
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

        // Menyimpan file Excel
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    }, []);

    return { exportToExcel };
};

export default useExcelWriter;