import React, {Component} from 'react';
import Pdf from './Pdf';
import { Container, Row, Col, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { PDFDownloadLink, PDFViewer, StyleSheet } from '@react-pdf/renderer';
import colores from '../static/js/colores';

class EditorCv extends Component{
    constructor (props){
        super(props);
        this.state={
                imagen:"",
                borderTam:1,
                imgPosicion:"center",
                posicionImg:20,
                colorBorde:colores[0].hex,
                numColor:0,
                left:true,
                center:false,
                right:false,
                nombreL:200,
                nombreT:-150,
                imagenFondo:"Horizontal",
                imgBgColor:"tomato",
                imgBgNumColor:0,
                horizontal:true,
                vertical:false,
                nombre:"",
                apellido:"",
                edad:"",
                nacionalidad:"",
                pais:"",
                provincia:"",
                ciudad:"",
                direccion:"",
                calle:"",
                altura:null,
                departamento:"",
                piso:"",
                sobreMi:"",
                cursos:[{nombre:"", cuerpo:{descripcion:"", inicio:"", fin:""}, id:0}],
                experiencias:[],
        };    
        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.handleChangeApellido = this.handleChangeApellido.bind(this);
        this.handleChangeNacionalidad = this.handleChangeNacionalidad.bind(this);
        this.handleChangeEdad = this.handleChangeEdad.bind(this);
        this.handleChangePais = this.handleChangePais.bind(this);
        this.handleChangeProvincia = this.handleChangeProvincia.bind(this);
        this.handleChangeCiudad = this.handleChangeCiudad.bind(this);
        this.handleChangeDireccion = this.handleChangeDireccion.bind(this);
        this.handleChangeCalle = this.handleChangeCalle.bind(this);
        this.handleChangeAltura = this.handleChangeAltura.bind(this);
        this.handleChangeDepartamento = this.handleChangeDepartamento.bind(this);
        this.handleChangePiso = this.handleChangePiso.bind(this);
        this.handleChangeSobreMi = this.handleChangeSobreMi.bind(this);
        this.handleChangeCursos = this.handleChangeCursos.bind(this);
        this.handleChangeExperiencias = this.handleChangeExperiencias.bind(this);
        this.handleOtroCurso = this.handleOtroCurso.bind(this);
        this.handleChangeBorderTam=this.handleChangeBorderTam.bind(this);
        this.handleChangeImgPosicionL=this.handleChangeImgPosicionL.bind(this);
        this.handleChangeImgPosicionC=this.handleChangeImgPosicionC.bind(this);
        this.handleChangeImgPosicionR=this.handleChangeImgPosicionR.bind(this);
        this.handleChangeImgBgPosH=this.handleChangeImgBgPosH.bind(this);
        this.handleChangeImgBgPosV=this.handleChangeImgBgPosV.bind(this);
        this.handleChangeImgBgColor=this.handleChangeImgBgColor.bind(this);
        
    }
   
  
    
    handleChangeNombre=(e) =>{
        this.setState({nombre:e.target.value})
    }
    handleChangeApellido=(e) =>{
        this.setState({apellido:e.target.value})
    }
    handleChangeNacionalidad=(e) =>{
        this.setState({nacionalidad:e.target.value})
    }
    handleChangeEdad=(e) =>{
        this.setState({edad:e.target.value})
    }
    handleChangePais=(e) =>{
        this.setState({pais:e.target.value})
    }
    handleChangeProvincia=(e) =>{
        this.setState({provincia:e.target.value})
    }
    handleChangeCiudad=(e) =>{
        this.setState({ciudad:e.target.value})
    }
    handleChangeDireccion=(e) =>{
        this.setState({direccion:e.target.value})
    }
    handleChangeCalle=(e) =>{
        this.setState({calle:e.target.value})
    }
    handleChangeAltura=(e) =>{
        this.setState({altura:e.target.value})
    }  
    handleChangeDepartamento=(e) =>{
        this.setState({departamento:e.target.value})
    }
    handleChangePiso=(e) =>{
        this.setState({piso:e.target.value})
    }
    handleChangeSobreMi=(e) =>{
        this.setState({sobreMi:e.target.value})
    }
    handleChangeCursos=(e) =>{
        const cursos= this.state.cursos;
        const id=e.target.id;
        const curso=cursos[id]
        const tipoDato=e.target.name;
        const valor = e.target.value;
        if(tipoDato ==="titulo"){
            curso.nombre=valor
        }else if (tipoDato==="descripcion"){
            curso.cuerpo.descripcion=valor;
        }else if(tipoDato ==="inicio"){
            curso.cuerpo.inicio=valor;
        }else if (tipoDato==="fin"){
            curso.cuerpo.fin=valor;
        }
        cursos[id]=curso;
        this.setState({cursos:cursos})
    }

    handleChangeExperiencias=(e) =>{
        const experiencias= this.state.experiencias;
        experiencias.push(e.target.value)
        this.setState({cursos:experiencias})
    }


    handleOtroCurso=(e)=>{
        const id = this.state.cursos.length;
        const curso={nombre:"", cuerpo:{descripcion:"", inicio:"", fin:""}, id:id}
        const cursos = this.state.cursos;
        cursos.push(curso)
        this.setState({cursos:cursos})
    }
    handleChangeBorderTam=(e)=>{
        this.setState({borderTam:e.target.value})
    }
    handleChangeImgPosicionL=(e)=>{
        let valor = e.target.value;
        this.setState({imgPosicion:valor})
        this.setState({left:true,center:false,right:false})
        this.setState({posicionImg:10})
        this.setState({nombreT:-150, nombreL:200})

    }
    handleChangeImgPosicionC=(e)=>{
        let valor = e.target.value;
        this.setState({imgPosicion:valor})
        this.setState({left:false,center:true,right:false})
        this.setState({posicionImg:200})
        this.setState({nombreT:0, nombreL:100})


    }
    handleChangeImgPosicionR=(e)=>{
        let valor = e.target.value;
        this.setState({imgPosicion:valor})
        this.setState({left:false,center:false,right:true})
        this.setState({posicionImg:360})
        this.setState({nombreT:-150, nombreL:50})

    }
    handleChangeBordeColor=(e)=>{
        let numero = e.target.value;
        let color = colores[numero].hex;
        this.setState({colorBorde:color});
        this.setState({numColor:numero})
    }
    handleChangeImgBgColor=(e)=>{
        let numero = e.target.value;
        let color = colores[numero].hex;
        this.setState({imgBgColor:color});
        this.setState({imgBgNumColor:numero})
    }
    handleChangeImgBgPosH=(e)=>{
        let posicion= e.target.value;
        this.setState({imagenFondo:posicion, horizontal:true, vertical:false})
    }
    handleChangeImgBgPosV=(e)=>{
        let posicion= e.target.value;
        this.setState({imagenFondo:posicion, horizontal:false, vertical:true})
    }

    render (){     
        const styles = StyleSheet.create({
            pdfViewer: {
              width:'100%',
              height:'100%'
            },
            linkNoStyle:{
                textDecoration: 'none',
            },
            inputScroll:{
                overflowY: 'scroll',
                height: 600,
                width: "auto",
                scrollbarColor: "yellow #800080",
                scrollbarWidth: 10,               
            },
            pdfHeight:{
                height:800,

                background:" #f1f2f3",
                overflow:"auto",
                boxSizing: "border-box",
            
            },
            
            rangeTextColor:{
                color: this.state.colorBorde,
            },
            rangeImgColor:{
                color:this.state.imgBgColor,
            }
  
        });
        const cursos = this.state.cursos;
        const data= this.state;

        const imagenExtra = (
                    <><Form.Group controlId="formBasicRange">
                        <Form.Label>Tamaño del borde: {this.state.borderTam}</Form.Label>
                        <Form.Control type="range"
                            value={this.state.borderTam}
                            onChange={this.handleChangeBorderTam} 
                            min={0}
                            max={10}
                        />
                    </Form.Group>       
                    <Form.Check type="radio" id='check-position'>
                        <Form.Label>Posicion de la imagen: {this.state.imgPosicion}</Form.Label>
                        <br/>
                        <Col>
                        <Form.Check inline label="Izquierda" type={"radio"}  value="Izquierda" onChange={this.handleChangeImgPosicionL} checked={this.state.left} />
                        <Form.Check inline label="Centro" type={"radio"} value="Centro" onChange={this.handleChangeImgPosicionC} checked={this.state.center}/>
                        <Form.Check inline label="Derecha" type={"radio"} value="Derecha" onChange={this.handleChangeImgPosicionR} checked={this.state.right}/>
                        </Col>
                    </Form.Check>
                    <br/>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label >Color del borde:<span style={styles.rangeTextColor}> {this.state.colorBorde}</span></Form.Label>
                        <Form.Control type="range"
                            onChange={this.handleChangeBordeColor} 
                            value={this.state.numColor}
                            min={0}
                            max={colores.length-1}
                        />
                    </Form.Group>    
                    <Form.Check type="radio" id='check-position'>
                        <Form.Label>Posicion del fondo de la imagen: {this.state.imgPosicion}</Form.Label>
                        <br/>
                        <Col>
                        <Form.Check inline label="Horizontal" type={"radio"} value="Horizontal" onChange={this.handleChangeImgBgPosH} checked={this.state.horizontal}/>
                        <Form.Check inline label="Vertical" type={"radio"} value="Vertical" onChange={this.handleChangeImgBgPosV} checked={this.state.vertical}/>
                        </Col>
                    </Form.Check>
                        <br/>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label >Color del fondo de la imagen:<span style={styles.rangeImgColor}> {this.state.imgBgColor}</span></Form.Label>
                        <br/>
                        <Form.Control type="range"
                            onChange={this.handleChangeImgBgColor} 
                            value={this.state.imgBgNumColor}
                            min={0}
                            max={colores.length-1}
                        />
                    </Form.Group>    

                    </>                
        )
        const inputList =[
             {"label":"Foto","placeholder":"Ingresa una Foto","name":"imagen","handle":this.handleChangeNombre,"state":this.state.imagen, "extra":imagenExtra}
            ,{"label":"Nombre","placeholder":"Ingresa tus nombres","name":"nombre","handle":this.handleChangeNombre,"state":this.state.nombre,"extra":""}
            ,{"label":"Apellido","placeholder":"Ingresa tus apellidos","name":"apellido","handle":this.handleChangeApellido,"state":this.state.apellido,"extra":""}
            ,{"label":"Edad","placeholder":"Ingresa tu edad","name":"edad","handle":this.handleChangeEdad,"state":this.state.edad,"extra":""}
            ,{"label":"Nacionalidad","placeholder":"Ingresa tu nacionalidad","name":"nacionalidad","handle":this.handleChangeNacionalidad,"state":this.state.nacionalidad,"extra":""}
            ,{"label":"Pais","placeholder":"Ingresa tu pais","name":"pais","handle":this.handleChangePais,"state":this.state.pais,"extra":""}
            ,{"label":"Provincia","placeholder":"Ingresa tu provincia","name":"provincia","handle":this.handleChangeProvincia,"state":this.state.provincia,"extra":""}
            ,{"label":"Ciudad","placeholder":"Ingresa ciudad","name":"ciudad","handle":this.handleChangeCiudad,"state":this.state.ciudad,"extra":""}
            ,{"label":"Direccion","placeholder":"Ingresa dirección","name":"direccion","handle":this.handleChangeDireccion,"state":this.state.direccion,"extra":""}
            ,{"label":"Calle","placeholder":"Ingresa calle","name":"calle","handle":this.handleChangeCalle,"state":this.state.calle,"extra":"",}
            ,{"label":"Altura","placeholder":"Ingresa altura","name":"altura","handle":this.handleChangeAltura,"state":this.state.altura,"extra":"",}
            ,{"label":"Departamento","placeholder":"Ingresa departamento","name":"departamento","handle":this.handleChangeDepartamento,"state":this.state.departamento,"extra":"",}
            ,{"label":"Piso","placeholder":"Ingresa piso","name":"piso","handle":this.handleChangePiso,"state":this.state.piso,"extra":"",}
            ,{"label":"Sobre mi","placeholder":"Ingresa una breve descripcion","name":"sobreMi","handle":this.handleChangeSobreMi,"state":this.state.sobreMi,"extra":"",}
        ]
        
        return(
            <Container>
                <Row >
                    <Col md="5"  sm="12" xs="12" >
                    <div style={styles.inputScroll}>

                        <PDFDownloadLink document={<Pdf data={data} fileName={data.nombre+"_"+data.apellido+".pdf"} style={styles.linkNoStyle}/>}>
                            {({blob, url, loading, error})=>(loading ? <Button variant="secondary" disabled>Cargando...</Button>: <Button variant="primary">DescargaR CV</Button>)}
                        </PDFDownloadLink>         
                        {inputList.map(input =>{
                            let extra=<Button variant="danger">No cargo</Button>;
                            if(input.extra !==""){
                                extra=input.extra;
                            }
                            return <div>
                                        <InputGroup className="mb-3"  size="sm">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">{input.label}: </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                placeholder={input.placeholder}
                                                aria-label={input.name}
                                                aria-describedby="basic-addon1"
                                                name={input.name}
                                                onChange={input.handle} 
                                                value={input.state}
                                            />
                                        </InputGroup>
                                        {extra}

                                
                                    </div>
                        })}  

                        {cursos.map(curso =>{
                                return <>
                                    <div id={curso.id}>
                                        <br/>
                                        <label>Curso numero:{curso.id+1}</label>
                                        <br/>
                                        <label htmlFor="titulo">Nombre Del curso:</label>
                                        <input type="text" id={curso.id} name="titulo" onChange={this.handleChangeCursos} placeholder="nombre del curso" />
                                    
                                        <label htmlFor="descripcion">Descripcion:</label>
                                        <input type="text" id={curso.id} name="descripcion" onChange={this.handleChangeCursos} placeholder="descripcion" />

                                        <label htmlFor="inicio">Inicio</label>
                                        <input type="date" id={curso.id} onChange={this.handleChangeCursos} name="inicio"/>

                                        <label htmlFor="fin">Fin</label>
                                        <input type="date" id={curso.id} onChange={this.handleChangeCursos} name="fin"/>
                                        <br/>
                                    </div>
                                </>
                            })
                        }
                        
                        <Button  variant="primary" onClick={this.handleOtroCurso}>Agregar curso</Button>
                        </div>

                    </Col>
                    
                    <Col md="7" sm="12" xs="12" >
                        <PDFViewer style={styles.pdfViewer}>
                            <Pdf data={data}/>
                        </PDFViewer>
                    </Col>  
                    
                </Row>
            </Container>
        )
    }
}
export default EditorCv;