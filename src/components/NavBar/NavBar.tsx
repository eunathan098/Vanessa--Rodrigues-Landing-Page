// Importação do React
import { useState } from 'react';

// Importação do CSS
import './NavBar.css';
import '../Styles/StylesResponsive.css'

// Importação de imagens
import LogoConfeiteira from '../../assets/logos/logotipo-vanessa-confeitaria.png';
import MenuMobile from '../MenuMobile/MenuMobile';
import IconMenuAbrir from '../../assets/icons/barra-de-menu.png';
import BotaoFazerPedido from '../BotaoFazerPedido/BotaoFazerPedido';

function NavBar() {

    // Estado responsável por abrir e fechar o menu
    const [menuAberto, setMenuAberto] = useState(false);

    // Abre o menu
    function abrirMenu() {
        setMenuAberto(true);
    }

    return (
        <>
            <nav className="header-navbar">

                {/* Logo */}
                <div className="container-logo">
                    <img
                        src={LogoConfeiteira}
                        alt="Vanessa Rodrigues Confeiteira" className='logo-header'
                    />
                </div>

                {/* Navegação Desktop */}
                <div className="container-navigation">

                    <ul>

                        <li>
                            <a
                                href="#inicio"
                                className="links-navigation"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#servicos"
                                className="links-navigation"
                            >
                                Serviços
                            </a>
                        </li>

                        <li>
                            <a
                                href="#enderecos"
                                className="links-navigation"
                            >
                                Endereços
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contato"
                                className="links-navigation"
                            >
                                Contato
                            </a>
                        </li>

                    </ul>

                   <BotaoFazerPedido></BotaoFazerPedido>

                </div>

                {/* Botão abrir menu mobile */}
                <img
                    src={IconMenuAbrir}
                    alt="Abrir menu"
                    height={40}
                    id="IconMenuMobile"
                    onClick={abrirMenu}
                />

            </nav>

            {/* Menu Mobile */}
            <MenuMobile
                menuAberto={menuAberto}
                setMenuAberto={setMenuAberto}
            />

        </>
    );
}

export default NavBar;