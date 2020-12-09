import {  Text, StyleSheet } from '@react-pdf/renderer';


function DatosPersonales(props){

    const styles=StyleSheet.create({
        fontSize:30,
            textAlign:'left',
            fontFamily:'Times-Roman',
            position:'absolute',
            width:'100%',
            left:190,
            top:30
    })

    textos=[]
    if(props.edad!=""){
        textos.add(<Text>{props.edad}</Text>)
    }
    if(props.pais!=""){
        textos.add(<Text>{props.pais}</Text>)
    }
    if(props.provincia!="" && props.ciudad!=""){
        textos.add(<Text> Provincia: {props.provincia}- Ciudad: {props.ciudad}</Text>)
    }
    if(props.direccion!=""){
        textos.add(<Text>{props.direccion}</Text>)
    }
    if(props.calle!="" && props.altura!=""){
        textos.add(<Text>{props.calle} {props.altura}</Text>)
    }
    if(props.piso!=""){
        textos.add(<Text>piso: {props.piso}- departamento:{props.departamento} </Text>)
    }

    return datosPersonales = textos.map(e=>{
            return <Text>{e}</Text>
        })
}