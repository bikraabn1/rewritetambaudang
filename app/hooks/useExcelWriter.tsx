'use client'
import { useCallback } from 'react';
import * as ExcelJS from 'exceljs';

const useExcelWriter = () => {
    const exportToExcel = useCallback(async (data: any[], fileName: string) => {
        
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Data');

        if (data.length > 0) {
            const columns = Object.keys(data[0]).map((key) => ({ header: key, key }));
            worksheet.columns = columns;
        }

        data.forEach((row) => {
            worksheet.addRow(row);
        });

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${fileName}.xlsx`;
        link.click();

        window.URL.revokeObjectURL(url);
    }, []);

    return { exportToExcel };
};

export default useExcelWriter;
