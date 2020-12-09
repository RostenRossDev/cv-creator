import {  Text, StyleSheet } from '@react-pdf/renderer';


function NombreApellido(props){
    const styles=StyleSheet.create({
        nombreVL:{
            fontSize:30,
            textAlign:'left',
            fontFamily:'Times-Roman',
            position:'absolute',
            width:'100%',
            left:190,
            top:30
        },
        nombreVC:{
            fontSize:30,
            textAlign:'center',
            fontFamily:'Times-Roman',
            position:'absolute',
            width:'100%',
            left:80,
            top:160
        },
        nombreVR:{
            fontSize:30,
            textAlign:'left',
            fontFamily:'Times-Roman',
            position:'absolute',
            width:'100%',
            left:35,
            top:30
        },
        nombreHL:{
            fontSize:30,
            textAlign:'left',
            fontFamily:'Times-Roman',
            position:'absolute',
            width:'100%',
            left:200,
            top:10
        },
        nombreHC:{
            fontSize:30,
            textAlign:'left',
            fontFamily:'Times-Roman',
            position:'absolute',
            textAlign:'center',
            width:'100%',
            left:35,
            top:160
        },
        nombreHR:{
            fontSize:30,
            textAlign:'left',
            fontFamily:'Times-Roman',
            position:'absolute',
            width:'100%',
            left:35,
            top:10
        },
    })
    const center=props.center;
    const left=props.left;
    const right=props.right;
    const imagenFondo=props.imagenFondo;
    console.log("en el centro:"+center)
    if(left && imagenFondo!=="Vertical"){
        return <Text  style={styles.nombreHL} >{props.nombre} {props.apellido}</Text>
    
    }else if(right && imagenFondo!=="Vertical"){
        return <Text  style={styles.nombreHR} >{props.nombre} {props.apellido}</Text>
    }
    else if(center && imagenFondo!=="Vertical"){
        return <Text  style={styles.nombreHC} >{props.nombre} {props.apellido}</Text>
    }
    else if(left) {
        return <Text  style={styles.nombreVL} >{props.nombre} {props.apellido} </Text>
    }
    else if(center) {
        return <Text  style={styles.nombreVC} >{props.nombre} {props.apellido}</Text>
    }
    else{
        return <Text  style={styles.nombreVR} >{props.nombre} {props.apellido}</Text>
    }
}

export default NombreApellido;