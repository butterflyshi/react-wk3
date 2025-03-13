function ProductList() {
    return (
        <div className="content-area">
          <img src="image/img_main_pumpkin.png"/>

          <div className="JoJo">
            <div className="left-content">
              <div className="left-ti">
                <p className="small-title">Vegetables</p>
              </div>
              <div className="left-img">
                <img src="image/img_vegetables_carrot.png"/>
                <img src="image/img_vegetables_corn.png"/>
                <img src="image/img_vegetables_pepper.png"/>
              </div>
            </div>

            <div className="right-content">
              <div className="right-ti">
                <p className="small-title">Contact</p>
              </div>
              <div className="right-text">
                <p>For any questions or suggestions about Vegetables, Vegetables Club or your online order you can contact Vegetables Customer Service by phone, email or post and we'll be happy to help.</p>
                <hr />
                <p>E-mail:Vegetables@aaabbccc.com</p>
                <p>PHONE:+886-123-456-789</p>
              </div>
            </div>
          </div>

        </div>
    );
}

export default ProductList;