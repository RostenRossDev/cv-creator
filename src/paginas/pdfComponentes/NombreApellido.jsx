import {  Text, StyleSheet } from '@react-pdf/renderer';


function NombreApellido(props){
    const styles=StyleSheet.create({
        nombre:{
            margin:12,
            fontSize:30,
            textAlign:'justify',
            fontFamily:'Times-Roman',
            left:props.nombreL,
            top:props.nombreT
        },
      
        nombreHorizontal:{
            margin:12,
            fontSize:30,
            textAlign:'justify',
            fontFamily:'Times-Roman',
            left:"50%",
            top:-500
        },
    })
    const center=props.center;
    const left=props.left;
    const right=props.right;
    const imagenFondo=props.imagenFondo;
    if(left && imagenFondo!=="Vertical"){
        return <>
            <Text style={styles.nombre} >{props.nombre} {props.apellido}</Text>
        </>
    }else if(right && imagenFondo!=="Vertical"){
        return <Text style={styles.nombre} >{props.nombre} {props.apellido}</Text>
    }
    else if(center && imagenFondo!=="Vertical"){
        return <Text style={styles.nombre} >{props.nombre} {props.apellido}</Text>
    }
    else {
        return <Text style={styles.nombreHorizontal} >{props.nombre} {props.apellido}</Text>
    }
}

export default NombreApellido;