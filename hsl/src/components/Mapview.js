import { Paper } from "@mui/material";
import React from "react";
import IFrame from "react-iframe"


export default function Mapview() {

    return (
        <div >
            <Paper >
                <IFrame
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977.4358853708509!2d25.034491416250255!3d60.28932264072218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469207c7bdc7ff01%3A0x632b7f204f3aa854!2sGrandinkulma!5e0!3m2!1sfi!2sfi!4v1637322590638!5m2!1sfi!2sfi"
                    width="100%"
                    height="650"
                    loading="lazy"
                />
            </Paper>
        </div>
    )
}


