import { useState } from "react";

function Monitors(){
    return (<>
        <div className="row mt-4 mb-2"><h3>Monitors</h3></div>
        <div className="row">
            <div className="col-sm-12">
                <div className="carousel slide" id="monitors" data-ride="carousel" data-bs-wrap="false"  data-bs-touch="true">
                    <div className="carousel-inner">


                        <div className="carousel-item active">

                            <div className="row">

                                
                                <div className="col-lg-3">
                                    <div className="card">
                                        <img src="../imgs/anime-sad-love-relationship-wallpapers.jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card">
                                        <img src="../imgs/anime-sky-wallpapers.jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card">
                                        <img src="../imgs/anime-sunny-day-wallpapers.jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card">
                                        <img src="../imgs/beautiful_scenary.png" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                </div>
                            </div>

                        </div>

                        <div className="carousel-item">

                            <div className="row">

                                
                                <div className="col-lg-3">
                                    <div className="card">
                                        <img src="../imgs/bright-anime-wallpapers.jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card">
                                        <img src="../imgs/riding on the wind.png" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card">
                                        <img src="../imgs/happy_place.jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="card">
                                        <img src="../imgs/kaneki_ken.jpg" className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                      </div>
                                </div>
                            </div>

                        </div>

                        


                    </div>


                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#monitors" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#monitors" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                      
                      
                </div>
            </div>
        </div>
        </>);
};

export default Monitors;