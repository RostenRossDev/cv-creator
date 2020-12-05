import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import perfil from '../static/img/perfil01.jpg'
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
    text:{
        margin:12,
        fontSize:14,
        textAlign:'justify',
        fontFamily:'Times-Roman'
    },
    
  });


const Pdf = (props) => (
    
    <Document >
      <Page size="A4" style={styles.page} >
        <Image 
            source={perfil}
            style={{ borderRadius:150,
                border: "${props.data.botderTam} solid #666",
                marginTop:10,
                height:150,
                width:150
            }} 
        />
        <Text style={styles.text} >Hola {props.data.nombre} {props.data.apellido} este es tu CV.</Text>
        { props.data.cursos.map(curso=>{
            return <Text style={styles.text}  >{curso.nombre} : {curso.cuerpo.descripcion} Inicio: {curso.cuerpo.inicio}  Finalizado: {curso.cuerpo.fin}</Text>
            })
        }
      </Page>
    </Document>
);


export default Pdf