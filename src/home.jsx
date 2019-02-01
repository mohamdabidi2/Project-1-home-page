import React, { Component } from 'react';
import './home.css'
class Home extends Component {

    render() {
        return (
            <div className='home'>
                <section className='intro'>

                    <img className='background-image' src='http://www.autobedrijfejdejong.nl/wp-content/uploads/2018/11/cropped-DSC_0263.jpg' alt='' />

                    <div >
                        <div className='intro-det'>
                            <h1 className='into-title'>LE SPÉCIALISTE DE LA PIÈCE AUTO <br />
                                D’OCCASION DEPUIS 1974</h1>
                            <h1 className='quation'>VOUS CHERCHEZ UNE PIÈCE ?</h1>
                            <div className='piece-det'>

                                <div className='Categorie aa'>
                                    <p className='Categorie-name'>Catégorie</p>
                                    <input className='Categorie-input' type='text' />
                                </div>
                                <div className='Marque aa'>
                                    <p className='Marque-name'>Marque</p>
                                    <select className='Marque-input'>
                                        <option>BMW</option>
                                        <option>MC</option>
                                        <option>KL</option>
                                        <option>GOLF</option>
                                        <option>TIT</option>
                                    </select>
                                </div>
                                <div className='Modele aa'>
                                    <p className='Modele-name'>Modèle</p>
                                    <select className='Modele-input'>
                                        <option>300</option>
                                        <option>400</option>
                                        <option>500</option>
                                        <option>600</option>
                                        <option>600</option>
                                    </select>
                                </div>
                                <input className='search aa' type='button' value='Search' />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='satistique'>
                        <div className='part-one'>
                            <h1 className='number1'>42500</h1>
                            <p className='surface zz'><span className='desc'>M² DE SURFACE</span> <br/> DÉDIÉ À <br/> L’AUTOMOBILE D’OCCASION</p>

                        </div>
                        <div className='part-one'>
                        <h1 className='number1'>12000</h1>
                            <p className='surface zz'><span className='desc'>M² DE MAGASIN</span> <br/> À VOTRE <br/> DISPOSITION</p>   
                        </div>
                        <div className='part-one'>
                        <h1 className='number1'>49</h1>
                            <p className='surface '><span className='desc'>TECHNICIENS & MAGASINIERS</span><br/>  À VOTRE <br/> ÉCOUTE</p>   
                        </div>

                    </div>
                </section>
                <section >
                <div className='service'>
                <h1 className='services-title'>FAÎTES UNE BONNE AFFAIRE !</h1>
                <div className="parteee">
                    <div className='desc-aa'>
                        <h3 className='desc-title'>FERRAILLE <span className='desc-rouge'><br/> TUNISIE</span></h3>
                        <p className="desc-desc">Nos horaires d’ouverture<br/> ont changé :<span className='da'><br/>
Nos équipes vous accueillent <br/>du lundi au vendredi, de 9h à<br/> 12h et de 14h à 18h</span></p>
                        
                    </div>
<div className='desc-imge'>
<img className="desc-img" src='https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt=""/>
</div>
                </div>
</div>
                </section>
                <section className='espace'>
                    <div className="subla">
                        <div className='part1'>
                            <h1 className='subla-title'><span className='vip'>LE SPÉCIALISTE</span> <br/>DE LA PIÈCE D’OCCASION</h1>
                            <p className='c-service' >Spécialiste de la pièces auto d’occasion depuis plus de 45 ans à Colomiers proche <br/>de Toulouse, toute notre équipe vous attend pour vous conseiller et vous aider à <br/>trouver la pièce auto d’occasion qu’il vous faut.</p>
                            <p className='c-service' >Avec 42 500 m2 dédiés à l’automobile, 12 000 m2 de magasin et<br/> 49 techniciens et conseillers à votre écoute, nous pourrons répondre à toutes vos demandes.</p>
                            <p className='c-service' >Nous proposons aussi de monter les pièces que vous avez acheté dans nos<br/> ateliers.</p>
                            <p className='c-service' >Notre partie de vente en ligne vous permet de commander 24h/24 et d’être livrés<br/> partout en Tunisie.</p>
                            <p className=' btna' >En savoir plus</p>
                        </div>
                        <div  className='part2' >
                            <div className='bassckgr'>
                                <img className='bass-image'  src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dwburnett-demon-garlits-1352-1517591562.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*' alt=''/>
                                <h3 className='title-img-aa'>GAGNEZ DU TEMPS<br/> D’ENLÈVEMENT !</h3>
                                <p>Site en ligne avec Livraisons sur toute la<br/> Tunisie en 24 / 48h. Garantie 1 an<br/>.Plus gros site en stock de Midi Pyrénées…<br/>Faites l’essai !</p>
                            </div>
                            <div className='deucplace'>
                                    <p className='elm1 '>F O C U S S {'- '}U R</p>
                                    <p className='savoir btna'>En savoir plus</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='cardss'>
                    <div className='card18'>
                        <div>
                            <img className='cardss-img' src='https://images.services.local.ch/bp/info-image-ad/65/65d0308e273dab3de8d583ce1c8ef0038580cc47/upload1.jpg?scale=crop&size=300x300&smartcrop=1&v=2&sig=fa9b4655e692ce32bd339cb6a102b753b786eff94c84d7e39001a938b3fc2168' alt=""/>
                            <p className='saave'>En savoir plus</p>
                        </div>
                        <p className='topa'>
                        PRESTATIONS
                        </p>
                        <p className='plse'>+</p>
                    </div>
                    <div className='card18'>
                        <div>
                            <img className='cardss-img'  src='http://img4.autodeclics.com/photo_article/78398/9116/300-S-bmw-m3-pack-competition-vs-alfa-romeo-giulia-quadrifoglio.jpg' alt=""/>
                            <p className='saave'>En savoir plus</p>
                        </div>
                        <p className='topa'>
                        VEHICULES
                        </p>
                        <p className='plse'>+</p>
                    </div>
                    <div className='card18'>
                        <div>
                            <img className='cardss-img'  src='https://img-0.journaldunet.com/ntppvVUVDlJar0oqaJrZ9A_mASI=/300x/smart/46002dd03b28496e8053ae0fb349e63c/ccmcms-jdn/10185137-5-fotolia-52470438-zuchero-fotoliacom.jpg' alt=""/>
                            <p className='saave'>En savoir plus</p>
                        </div>
                        <p className='topa'>
                        PARC
                        </p>
                        <p className='plse'>+</p>
                    </div>

                    </div>
                </section>
                <section>
                    <div className="emain-all">
                        <p className="restez">RESTEZ CONNECTÉS,<span className='emql'> INSCRIVEZ VOUS À NOTRE NEWSLETTER...</span></p>
                        <input className="email" type='text'/>
                        <a className='Send' href='/1222' >Send</a>

                    </div>
                    <div className='piece-det hh'>

                                <div className='Categorie aa '>
                                    <p className='Categorie-name'>Catégorie</p>
                                    <input className='Categorie-input' type='text' />
                                </div>
                                <div className='Marque aa'>
                                    <p className='Marque-name'>Marque</p>
                                    <select className='Marque-input'>
                                        <option>BMW</option>
                                        <option>MC</option>
                                        <option>KL</option>
                                        <option>GOLF</option>
                                        <option>TIT</option>
                                    </select>
                                </div>
                                <div className='Modele aa'>
                                    <p className='Modele-name'>Modèle</p>
                                    <select className='Modele-input'>
                                        <option>300</option>
                                        <option>400</option>
                                        <option>500</option>
                                        <option>600</option>
                                        <option>600</option>
                                    </select>
                                </div>
                                <input className='search aa' type='button' value='Search' />
                            </div>
                </section>
            </div>
        );
    }
}

export default Home;