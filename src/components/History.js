import React from "react"
import { Trash } from 'grommet-icons';
import { Box,Stack, Button, Grommet, Heading, Layer, Select, Text } from 'grommet';

export default function History() {
    const [open, setOpen] = React.useState();
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(undefined);


    return (
            <Stack>
                {!open &&(
            <Box fill align="center" justify="center" onClick={onOpen} animation={"fadeIn"}>
            <h2> QUEM SOMOS?</h2>
            </Box>)}
            {open && (
                <Box fill align="center" justify="center" onClick={onClose} animation={"fadeIn"}>
                    <h2> SOMOS UMA EMPRESA JOVEM E DINAMICA</h2>
                </Box>
            )}
            </Stack>
    )
}