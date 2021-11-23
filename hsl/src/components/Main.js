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
                <Typography class="Font">
                    Oops!!!.... Something went wrong <br />
                    Error: {error.message}
                </Typography>
            </div>
        )
    }

    if (loading) {
        return (
            <Box class="Loader">
                <div>
                    <Typography>
                        Loading content
                    </Typography>
                    <PacmanLoader color={"orange"} size={40} />
                </div>
            </Box>
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
                    <Table sx={{ minWidth: 650 }} >
                        <TableHead >
                            <TableRow >
                                <TableCell class="Font">Time table</TableCell>
                                <TableCell class="Font" >Scheduled arrival</TableCell>
                                <TableCell class="Font" >Real time arrival</TableCell>
                                <TableCell class="Font" >Scheduled departure</TableCell>
                                <TableCell class="Font" >Real time departure</TableCell>
                                <TableCell class="Font" >Head sign</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {busData.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell class="Font" >{new Date((row.scheduledArrival + row.serviceDay) * 1000).getHours()}:{new Date((row.scheduledArrival + row.serviceDay) * 1000).getMinutes()}</TableCell>
                                    <TableCell class="Font" >{new Date((row.realtimeArrival + row.serviceDay) * 1000).getHours()}:{new Date((row.realtimeArrival + row.serviceDay) * 1000).getMinutes()}</TableCell>
                                    <TableCell class="Font" >{new Date((row.scheduledDeparture + row.serviceDay) * 1000).getHours()}:{new Date((row.scheduledDeparture + row.serviceDay) * 1000).getMinutes()}</TableCell>
                                    <TableCell class="Font" >{new Date((row.realtimeDeparture + row.serviceDay) * 1000).getHours()}:{new Date((row.realtimeDeparture + row.serviceDay) * 1000).getMinutes()}</TableCell>
                                    <TableCell class="Font" >{row.headsign}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Box>
    )

}