<Router>
  <Switch>
    <Route exact path="/products/:productId" component={ProductDetail}/>
  </Switch>
</Router>

goToProductDetail = id => {
  this.props.history.push(`/product/${id}`);
};

path: '/product/detail/:id';
url: '/product/detail/2'

// Route.js
<Route exact path='/products/:productId' component={ProductDetail} />

// ProducionDetail.js
render() {
  console.log(this.props) // {history: {}, location: {}, match: {} , ...}
}