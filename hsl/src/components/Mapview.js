import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import IFrame from "react-iframe"
import { PacmanLoader } from "react-spinners";

/*
https://bussitutka.fi/map?mode=operator&operator=12#16.92/60.288609/25.037698
- Selvitä miten kartta ja bussit saadaan näkyviin
*/

export default function Mapview() {
    const [loading, setLoading] = useState(false)

    if (loading) {
        return (
            <div className="Loader">
                <Typography>
                    Loading...
                </Typography>
                <PacmanLoader color={"orange"} size={50} />
            </div>
        )
    }

    return (
        <div style={{borderTopColor: "white"}}>
            <Paper >
                <IFrame
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.4358853708509!2d25.034491416250255!3d60.28932264072218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469207c7bdc7ff01%3A0x632b7f204f3aa854!2sGrandinkulma!5e0!3m2!1sfi!2sfi!4v1637322590638!5m2!1sfi!2sfi"
                    width="100%"
                    height="600"
                    loading="lazy"
                    
                />
            </Paper>
        </div>
    )
}


