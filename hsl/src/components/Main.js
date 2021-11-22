import React from "react";
import Box from '@mui/material/Box';
import { useQuery, gql } from "@apollo/client";
import { PacmanLoader } from "react-spinners";
import { Typography } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
/*
Grandinkulma id 4610221
Töölöntori id 1140447
*/

const STOP_QUERY = gql`
{
    stop(id: "HSL:4610221") {
      name
        stoptimesWithoutPatterns {
        scheduledArrival
        realtimeArrival
        arrivalDelay
        scheduledDeparture
        realtimeDeparture
        departureDelay
        realtime
        realtimeState
        serviceDay
        headsign
      }
    }  
  }
`


export default function Main() {
    const { data, loading, error } = useQuery(STOP_QUERY);

    if (error) {
        return (
            <div>
                <Typography className="Font">
                    Oops!!!.... Something went wrong <br />
                    Error: {error.message}
                </Typography>
            </div>
        )
    }

    if (loading) {
        return (
            <PacmanLoader color={"orange"} size={50} />
        )
    }

    const busData = data.stop.stoptimesWithoutPatterns

    return (
        <Box>
            <Typography class="Font">
                <u>{data.stop.name}</u>
            </Typography>
            <div >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead >
                            <TableRow >
                                <TableCell class="Font">Time table</TableCell>
                                <TableCell class="Font" align="center">Scheduled arrival</TableCell>
                                <TableCell class="Font" align="center">Real time arrival</TableCell>
                                <TableCell class="Font" align="center">Scheduled departure</TableCell>
                                <TableCell class="Font" align="center">Real time departure</TableCell>
                                <TableCell class="Font" align="center">Head sign</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {busData.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell  component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell class="Font" align="center">{new Date((row.scheduledArrival + row.serviceDay) * 1000).getUTCHours()}:{new Date((row.scheduledArrival + row.serviceDay) * 1000).getUTCMinutes()}</TableCell>
                                    <TableCell class="Font" align="center">{new Date((row.realtimeArrival + row.serviceDay) * 1000).getUTCHours()}:{new Date((row.realtimeArrival + row.serviceDay) * 1000).getUTCMinutes()}</TableCell>
                                    <TableCell class="Font" align="center">{new Date((row.scheduledDeparture + row.serviceDay) * 1000).getUTCHours()}:{new Date((row.scheduledDeparture + row.serviceDay) * 1000).getUTCMinutes()}</TableCell>
                                    <TableCell class="Font" align="center">{new Date((row.realtimeDeparture + row.serviceDay) * 1000).getUTCHours()}:{new Date((row.realtimeDeparture + row.serviceDay) * 1000).getUTCMinutes()}</TableCell>
                                    <TableCell class="Font" align="center">{row.headsign}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Box>
    )

}