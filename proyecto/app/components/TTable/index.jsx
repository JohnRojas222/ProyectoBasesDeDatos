"use client";
import { Table } from "react-bootstrap";
import { titleCase } from "@/app/functions/titleCase";
import "../../styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/table.css';

export default function TTable({ list, maxWidth="100%", maxHeight="80vh" }) {
    const columns = Object.keys(list[0]);
    return (
        <div className="tableBox" style={{maxWidth: maxWidth, maxHeight: maxHeight}}>
            <Table>
                <thead className="tableHead">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} className="text-center"> {titleCase(column)} </th>
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
