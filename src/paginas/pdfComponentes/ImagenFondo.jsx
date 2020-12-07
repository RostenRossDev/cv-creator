import { StyleSheet, View, Image } from '@react-pdf/renderer';
import perfil from '../../static/img/perfil01.jpg'

function ImagenFondo(props){
    const styles=StyleSheet.create({
        imagen:{ 
            borderRadius:150,
            border: props.borderTam+" solid #666",
            marginTop:10,
            height:150,
            width:150,
            marginLeft:props.posicionImg,
            borderColor:props.colorBorde,
        },
        horizontal:{
            backgroundColor:props.imgBgColor,
            height:"22%",
            width:"100%"
        },
        vertical:{
            backgroundColor:props.imgBgColor,
            height:"100%",
            width:"30%",
            marginLeft:0
        }
    })

    const imagenFondo=props.imagenFondo;

    if(imagenFondo==="Horizontal"){
        console.log("posicion fondo"+imagenFondo)
        return  <View style={styles.horizontal}>
                    <Image 
                        source={perfil}
                        style={styles.imagen} 
                    />
                </View>
    }else if(imagenFondo==="Vertical"){
        console.log("posicion fondo"+imagenFondo)
        return  <View style={styles.vertical}>
                    <Image 
                        source={perfil}
                        style={styles.imagen} 
                    />
                </View>
    }


     
}

export default ImagenFondo