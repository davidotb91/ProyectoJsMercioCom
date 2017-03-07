module.exports = {
    error: function (req, res) {
        return res.view('error', {
            error: {
                desripcion: "Usted esta por error en esta Ruta. Vaya a Inicio"
                , rawError: "Ruta equivocada"
                , url: "/Inicio"
            }
        });
    }
    , crearSugerencia: function (req, res) {
        return res.view('contactanos');
    }
    , listarSugerencia: function (req, res) {
        Sugerencias.find().exec(function (error, sugerenciasEncontrados) {
            if (error) {
                return res.view('error', {
                    error: {
                        descripcion: "Hubo un problema listando los poderes"
                        , rawError: error
                        , url: "/contactanos"
                    }
                });
            }
            res.view('contactanos', {
                sugerencias: sugerenciasEncontrados
            })
        })
    }
, };