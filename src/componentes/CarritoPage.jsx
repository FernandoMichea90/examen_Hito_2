import React, { useState, useEffect } from 'react';
import './CarritoPage.css'; 


function CarritoPage() {
  const [itemsCarrito, setItemsCarrito] = useState([]);


const getProducts = async()=>{

  const response= await api.get('/api/productos');
  return response;
}

  useEffect(() => {
    
    try {

      
    } catch (error) {
      
    }
    //  setItemsCarrito([...itemsCarrito]);
  }, []);

  const handleRemove = (id) => {
    // Eliminar producto del carrito
  };

  const handleChangeCantidad = (id, delta) => {
    // Aumentar o disminuir la cantidad del producto
  };

  const calcularTotal = () => {
    // Calcular el total del carrito
  };

  return (
    <div className="carrito-page">
      <div className="carrito-items">
        {itemsCarrito.map((item) => (
          <div key={item.id} className="carrito-item">
            <img src={item.imagen} alt={item.nombre} className="item-imagen"/>
            <div className="item-info">
              <div className="item-nombre">{item.nombre}</div>
              <div className="item-precio">${item.precio}</div>
              <div className="item-cantidad">
                <button onClick={() => handleChangeCantidad(item.id, -1)}>-</button>
                <span>{item.cantidad}</span>
                <button onClick={() => handleChangeCantidad(item.id, 1)}>+</button>
              </div>
              <div className="item-subtotal">
                Subtotal: ${(item.precio * item.cantidad).toFixed(2)}
              </div>
            </div>
            <button onClick={() => handleRemove(item.id)} className="item-remove">Eliminar</button>
          </div>
        ))}
      </div>
      <div className="carrito-resumen">
        <div className="order-summary">
          <div className="summary-line">
            <span>Cantidad de productos:</span>
            <span>{itemsCarrito.length}</span>
          </div>
          <div className="summary-line">
            <span>Total:</span>
            {/* <span>${calcularTotal().toFixed(2)}</span> */}
          </div>
        </div>
        <button className="payment-button">Continuar al pago</button>
      </div>
    </div>
  );
}

export default CarritoPage;
