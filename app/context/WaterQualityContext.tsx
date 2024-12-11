'use client'
import { createContext } from "react"

export interface WaterQualityData {
    id: number;
    tds: number;
    ph: number;
    color: string;
    time: string;
}

export interface WaterQualityContextType {
    data: WaterQualityData[];
    loading: boolean;
    error: string | null;
}

export const WaterQualityContext = createContext<WaterQualityContextType | undefined>(undefined)




// {id: 1, tds: 0, ph: 11, color: '80B1A4', time: '2024-11-08T16:07:30.000Z'}
// {id: 2, tds: 0, ph: 11, color: '8C7C9E', time: '2024-11-08T16:07:33.000Z'} 
// {id: 3, tds: 0, ph: 11, color: 'A49198', time: '2024-11-08T16:07:37.000Z'}
// {id: 4, tds: 0, ph: 11, color: '8CC5A1', time: '2024-11-08T16:07:40.000Z'}
// {id: 5, tds: 0, ph: 11, color: '8471A1', time: '2024-11-08T16:07:43.000Z'}
// {id: 6, tds: 0, ph: 11, color: '84A140', time: '2024-11-08T16:07:47.000Z'}
// {id: 7, tds: 0, ph: 11, color: '196955', time: '2024-11-08T16:07:50.000Z'}
// {id: 8, tds: 0, ph: 11, color: '846466', time: '2024-11-08T16:07:54.000Z'}
// {id: 9, tds: 0, ph: 11, color: '98B6F8', time: '2024-11-08T16:07:57.000Z'}
// {id: 10, tds: 0, ph: 11, color: '84DC1F', time: '2024-11-08T16:08:01.000Z'}
// {id: 11, tds: 0, ph: 11, color: '88EF9B', time: '2024-11-08T16:08:04.000Z'}