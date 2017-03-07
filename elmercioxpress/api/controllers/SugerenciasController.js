/**
 * SugerenciasController
 *
 * @description :: Server-side logic for managing sugerencias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
		crearSugerencia: function (req, res) {

        if (req.method == "POST") {
            
            var parametros = req.allParams();
            
            if (parametros.asunto) {
                
                var sugerenciaCrear = {
                    asunto: parametros.asunto,
                    contenido: parametros.contenido
                }
                
                if (parametros.asunto == "") {
                    delete sugerenciaCrear.asunto;
                }
                
                if (parametros.contenido == "") {
                    delete sugerenciaCrear.contenido;
                }
                
                              
                
                Sugerencias.create(sugerenciaCrear).exec(function (err, sugerenciaCreado) {
                    if (err) {
                        return res.view('error', {
                            error: {
                                descripcion: "Fallo al crear el contenido"
                                , rawError: err
                                , url: "/contactanos"
                            }
                        });
                    }
                    
                    Sugerencias.find().exec(function (errorIndefinido, sugerenciasEncontrados) {
                        
                        if (errorIndefinido) {
                            res.view('error', {
                                error: {
                                    descripcion: "Hubo un problema cargando las sugerencias"
                                    , rawError: errorIndefinido
                                    , url: "/contactanos"
                                }
                            });
                        }
                        
                        res.view('contactanos', {
                            sugerencias: sugerenciasEncontrados
                        });
                    })
                })
            }
            else {
                return res.view('error', {
                    error: {
                        descripcion: "Llena el asunto"
                        , rawError: "Fallo en envío de parámetros"
                        , url: "/contactanos"
                    }
                });
            }
        }
        else {
            return res.view('error', {
                error: {
                    descripcion: "Error en el uso del Método HTTP"
                    , rawError: "HTTP Inválido"
                    , url: "/contactanos"
                }
            });
        }
    }
    
};

