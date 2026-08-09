// Importação do CSS
import './MenuMobile.css';

// Importação de imagens
import BotaoMobileFechar from '../../assets/icons/botao-fechar.png';

// Tipos das props
import type { Dispatch, SetStateAction } from 'react';
import BotaoFazerPedido from '../BotaoFazerPedido/BotaoFazerPedido';

interface MenuMobileProps {
    menuAberto: boolean;
    setMenuAberto: Dispatch<SetStateAction<boolean>>;
}

function MenuMobile({
    menuAberto,
    setMenuAberto
}: MenuMobileProps) {

    // Se o menu estiver fechado, não mostra o componente
    if (!menuAberto) {
        return null;
    }

    return (
        <div className="container-menu-mobile">

            {/* Botão fechar */}
            <div className="container-btn-fechar">

                <img
                    src={BotaoMobileFechar}
                    alt="Fechar menu"
                    height={40}
                    onClick={() => setMenuAberto(false)}
                />

            </div>

            {/* Links */}
            <div className="container-links-menu-mobile">

                <ul>

                    <li>
                        <a
                            href="#inicio"
                            className="links-navigation"
                            onClick={() => setMenuAberto(false)}
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#sobre"
                            className="links-navigation"
                            onClick={() => setMenuAberto(false)}
                        >
                            Sobre
                        </a>
                    </li>

                    <li>
                        <a
                            href="#enderecos"
                            className="links-navigation"
                            onClick={() => setMenuAberto(false)}
                        >
                            Endereços
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contato"
                            className="links-navigation"
                            onClick={() => setMenuAberto(false)}
                        >
                            Contato
                        </a>
                    </li>

                </ul>

            </div>
            <BotaoFazerPedido></BotaoFazerPedido>
            

        </div>
    );
}

export default MenuMobile;  