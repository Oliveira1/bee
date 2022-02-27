import React from "react"
import { Avatar, Button, Header,Menu, Nav } from 'grommet';
import Logo from "../../static/avatarteste.svg";

export default function SHeader(){
    return (
        <Header background="light-4" pad="medium" height="xsmall">
            <Avatar size="large" src={Logo} size="large"/>
            <Nav direction="row" align="center" gap="small">
                <Menu label="EMPRESA" items={[{ label: 'logout' }]} />
                <Menu label="SERVIÇOS" items={[{ label: 'Consultas'},{label: 'Serviços de Saúde'},{label:'Serviços de Bem Estar'}]} />
                <Menu label="RECRUTAMENTO"  />
                <Menu label="CONTACTOS" items={[{ label: 'logout' }]} />
            </Nav>
        </Header>
    )
}