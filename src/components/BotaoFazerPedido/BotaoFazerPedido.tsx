// Importação do CSS
import './BotaoFazerPedido.css'
import '../Styles/StylesResponsive.css'

function BotaoFazerPedido(){
    return(
        <>
             <div className="container-nav-btn">
                        <a
                            href="#contato"
                            id="btn-fazer-pedido"
                        >
                            Fazer Pedido
                        </a>
                    </div>
        </>
    )
}

export default BotaoFazerPedido;