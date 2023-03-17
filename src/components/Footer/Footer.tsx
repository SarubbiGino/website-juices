import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link } from '@material-ui/core';
import './Footer.css'

function Footer() {
 

  return (
    <div className="footer">
      <Grid container spacing={9} justify="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Sabores
          </Typography>
          <ul className='UL'>
            <li><Link href="#" className="links">Naranja</Link></li>
            <li><Link href="#" className="links">Frutilla</Link></li>
            <li><Link href="#" className="links">Limón</Link></li>
            <li><Link href="#" className="links">Manzana</Link></li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="sobrenosotros">
          <Typography variant="h6" gutterBottom>
            Sobre Nosotros
          </Typography>
          <Typography variant="body2" component="p">
            Somos una empresa con sede en Buenos Aires, Argentina. Nos enorgullece ofrecer jugos frescos y naturales de alta calidad desde hace más de 20 años.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Redes Sociales
          </Typography>
          <ul>
            <li><Link href="#" className="links">Facebook</Link></li>
            <li><Link href="#" className="links">Instagram</Link></li>
            <li><Link href="#" className="links">Twitter</Link></li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
