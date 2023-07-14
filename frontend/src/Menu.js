import React, { Component } from 'react'

const Produto = () =>{
  return (
   <div className="card-group">
  <div className="card">
    <img src="https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/Laranja_lima_600x600[1]-1000x1000.jpg" className="card-img-top"
      alt="Hollywood Sign on The Hill" />
    <div className="card-body">
      <h5 className="card-title">Laranja</h5>
      <p className="card-text">
        Esta e uma bela laranja
      </p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div className="card">
    <img src="https://hortifruti.com.br/media/catalog/product/1/0/100065-banana-prata-unidade.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover" className="card-img-top"
      alt="Palm Springs Road" />
    <div className="card-body">
      <h5 className="card-title">Banana</h5>
      <p className="card-text">Uma saborosa banana
      </p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
  <div className="card">
    <img src="https://scfoods.fbitsstatic.net/img/p/melancia-mini-unidade-70680/257182.jpg?w=800&h=800&v=no-change&qs=ignore" className="card-img-top"
      alt="Los Angeles Skyscrapers" />
    <div className="card-body">
      <h5 className="card-title">Melancia</h5>
      <p className="card-text">
        Uma bela melancia
      </p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</div>
  )
}

const Header = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Loja virtual</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign up</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Produtos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Cadastrar</a></li>
            <li><a className="dropdown-item" href="#">Editar</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Deletar</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

class Menu extends Component {
    render(){
        return(
            <div className='container'>
                <Header/>
                
                <Produto/>

                <Produto/>
            </div>
        )
    }
}
export default Menu