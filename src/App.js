import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';
class App extends Component {
  state = {
    productos: [
      { name: 'Duck Camo', price: 5500, img: '/productos/camo.jpg' },
      { name: 'Desert Camo', price: 2500, img: '/productos/desert.jpg' },
      { name: 'Premium Atmos', price: 1500, img: '/productos/atmos.jpg' },
    ],
    cart: [],
    isCartVisible: false,
  }

  addToCar = (producto) => {
    const { cart } = this.state
    if (cart.find(x => x.name === producto.name)) {
      const newCart = cart.map(x => x.name === producto.name
      ? ({
        ...x,
        cantidad: x.cantidad + 1
      })
      : x)
      return ( this.setState({ cart: newCart }))
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  showCart = () => {
    if(!this.state.cart.length){
      return
    }
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render() {
    const { isCartVisible } = this.state
    return(
      <div>
        <Navbar 
          cart={this.state.cart}
          isCartVisible={isCartVisible}
          showCart={this.showCart} />
        <Layout>
          <Title />
          <Productos
            addToCar={this.addToCar}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;