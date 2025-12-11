import PropTypes from "prop-types"

export const ProductTable =({products,handlerProductSelected,handlerDeleteProduct})=>{
    return (
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>descripcion</th>
            <th>precio</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handlerProductSelected(product)}
                  >
                    update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handlerDeleteProduct(product.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}

ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    handlerProductSelected: PropTypes.func.isRequired,
    handlerDeleteProduct: PropTypes.func.isRequired
}