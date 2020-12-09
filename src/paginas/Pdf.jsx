import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';
import NombreApellido from './pdfComponentes/NombreApellido';
import ImagenFondo from './pdfComponentes/ImagenFondo';


const styles = StyleSheet.create({
    page: {
      backgroundColor: 'tomato',
      paddingBottom:65,
      paddingHorizontal: 35,
    },
    section: {
      color:'white',
      textAlign:'center',
      margin:30
    },
    nombre:{
      margin:12,
      fontSize:30,
      textAlign:'justify',
      fontFamily:'Times-Roman',
      left:200,
      top:-150
    },
    apellido:{
      margin:12,
      fontSize:35,
      textAlign:'justify',
      fontFamily:'Times-Roman',
      left:200,
      top:-150
    },
    header:{
      display:"inline-block",
      backgroundColor:"#1CD3A2"
    }
    
  });


const Pdf = (props) => (

   <Document >
        {console.log('borderTam: '+props.data.borderTam)}
      <Page size="A4" style={styles.page}  >

        <ImagenFondo
          
          posicionImg={props.data.posicionImg}
          colorBorde={props.data.colorBorde}
          imgBgColor={props.data.imgBgColor}
          borderTam={props.data.borderTam}
          imagenFondo={props.data.imagenFondo}
        />
        <NombreApellido
          
          nombre={props.data.nombre}
          apellido={props.data.apellido}
          nombreL={props.data.nombreL}
          nombreT={props.data.nombreT}
          imagenFondo={props.data.imagenFondo}
          left={props.data.left}
          center={props.data.center}
          right={props.data.right}
        />
        {props.data.cursos.map(curso=>{
            return <Text style={styles.text}  >{curso.nombre} : {curso.cuerpo.descripcion} Inicio: {curso.cuerpo.inicio}  Finalizado: {curso.cuerpo.fin}</Text>
            })
        }
      </Page>
    </Document>
);


export default Pdf