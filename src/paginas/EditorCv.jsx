import React, {Component} from 'react';
import Pdf from './Pdf';
import { Container, Row, Col, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { PDFDownloadLink, PDFViewer, StyleSheet } from '@react-pdf/renderer';

class EditorCv extends Component{
    constructor (props){
        super(props);
        this.state={
                imagen:"",
                borderTam:1,
                imgPosicion:"center",
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
        cursos.map(curso=>{
            console.log(curso.id);
            console.log(curso.nombre)
            console.log(curso.cuerpo.descripcion)
        })
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
        console.log("nombre: "+e.target.name)
        console.log("valor: "+e.target.value)
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
        console.log("andate a cagar porteño")
        console.log("cursos: "+cursos.toString())
        console.log("estado: "+Object.values(this.state.cursos))

    }
    handleChangeBorderTam=(e)=>{
        this.setState({botderTam:e.target.value})
    }
    hadleChangeImgPosicion=(e)=>{
        this.setState({imgPosicion:e.target.value})
    }
    render (){     
        const cursos = this.state.cursos;
        const data= this.state;

        const imageBorderAndPosition = (
                    <><Form.Group controlId="formBasicRange">
                        <Form.Label>Tamaño del borde</Form.Label>
                        <Form.Control type="range"
                            onChange={this.handleChangeBorderTam} 
                        />
                    </Form.Group>                   
                       
                    <Form.Check type="radio" id='check-position'>
                        <Form.Check.Input type={"radio"} value="left" onChange={this.hadleChangeImgPosicion} />
                        <Form.Control.Feedback type="valid">izquierda</Form.Control.Feedback>
                        <Form.Check.Input type={"radio"} value="center" onChange={this.hadleChangeImgPosicion}/>
                        <Form.Control.Feedback type="valid">centrada</Form.Control.Feedback>
                        <Form.Check.Input type={"radio"} value="right" onChange={this.hadleChangeImgPosicion}/>
                        <Form.Control.Feedback type="valid">derecha</Form.Control.Feedback>
                        <Form.Check.Label>{`Posicion de imagen`}</Form.Check.Label>

                    </Form.Check>
                    </>                
        )
        const inputList =[
             {"label":"Foto","placeholder":"Ingresa una Foto","name":"imagen","handle":this.handleChangeNombre,"state":this.state.imagen, "extra":imageBorderAndPosition}
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
  
        });

        

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