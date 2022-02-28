import React from 'react'
import {Box, Button, Grid, Text, Avatar, Grommet, Heading} from 'grommet';
import Logo from "../../static/avatarteste.svg";


const Footer = () => {
    return (
        <Box background="light-4">
        <Grid fill
              rows={['xsmall','medium']}
              columns={['medium','medium','medium']}
              areas={[['title','title','title'],
              ['location','contact','follow']]}
              gap="small"
              justify="center"
             >
            <Box gridArea="title" align="center" >
                <Heading level="2" size="medium"> MANTENHA-SE EM CONTACTO</Heading>
                <div className="divider"/>
            </Box>
            <Box  gridArea="location" align="center">
                <Avatar src={Logo} size="medium"/>
                <Heading level="3" size="medium"> ENCONTRE-NOS </Heading>
                <Text> juniper street</Text>
                <Text> 123412- 123</Text>
                <Text> Lisboa </Text>
            </Box>
            <Box  gridArea="contact" align="center">
                <Avatar src={Logo} size="medium" />
                <Heading level="3" size="medium"> CONTACTE-NOS </Heading>
                <Text alignSelf="center"> 918 472 621</Text>
                <Text>geral@projetobee.pt</Text>
            </Box>
            <Box  gridArea="follow" align="center">
                <Avatar src={Logo} size="medium"/>
                <Heading level="3" size="medium"> SIGA-NOS </Heading>
                <Text> Facebook </Text>
                <Text>Twitter</Text>
                <Text>Linkedin</Text>
            </Box>
        </Grid>
            </Box>
    )
}
export default Footer