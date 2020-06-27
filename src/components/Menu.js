import React from 'react'

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'

const MenuTable = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2}>
            <Typography variant="h6" className="detailHeroText">{props.title}</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.items ? props.items.map((item, i) => (
          <TableRow key={i}>
            <TableCell>
              {item.name}
            </TableCell>
            <TableCell>
              ${item.price}
            </TableCell>
          </TableRow>
        )) : null}
      </TableBody>
    </Table>
  );
}

const Menu = (props) => {  
  return (
    <Container maxWidth="lg" className="shop-container">
      <Typography variant="h3" className="detailHeroText">
        Menu
      </Typography>
      <div className="flex-container" ref={props.linkRef}>
        <MenuTable title="Entrees" items={props.shop.entrees} />
        <MenuTable title="Drinks" items={props.shop.drinks} />
      </div>
    </Container>
  )
}

export default Menu;