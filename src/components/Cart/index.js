import CartContext from '../../context/CartContext'
import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <>
              <div className="cart-container">
                <div className="cart-content-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-btn"
                    onClick={onClickRemoveAllBtn}
                  >
                    Remove All
                  </button>
                  <CartListView />
                  <CartSummary />
                </div>
              </div>
            </>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
