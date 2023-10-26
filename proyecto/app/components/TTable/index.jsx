"use client";
import { Table } from "react-bootstrap";
import { splitByUpperCase } from "@/app/functions/splitByUpperCase";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/table.css';
import "../../styles/global.css";

export default function TTable({ list=[], maxWidth="100%", maxHeight="80vh", margin="0"}) {
    const columns = list.length > 0 ? Object.keys(list[0]) : [];
    return (
        <div className="tableBox" style={{maxWidth: maxWidth, maxHeight: maxHeight, margin: margin}}>
            <Table>
                <thead className="tableHead">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} className="text-center"> {splitByUpperCase(column)} </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {list.map((row, index) => (
                        <tr key={index} >
                            {columns.map((column, index) => (
                                <td key={index} className="text-center">{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
