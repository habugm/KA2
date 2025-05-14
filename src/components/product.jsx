import { Image } from "./image";
import React from "react";

export const Product = (props) => {
  return (
    <div id="product" className="product text-center">
         <section className="product" >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>Our Products</h2>
              <div className="container">
              <div className="product-slider">
                  <div className="product-list">
                  <div className="product-card">
                      <div className="image-container">
                        <img src="img/hammer.jpg" alt="Product Name" className="product-image" />
                      </div>
                      <h5 className="product-name">Hammer</h5>
                    </div>
                    <div className="product-card">
                      <div className="image-container">
                        <img src="img/Screwdriver.jpg" alt="Product Name" className="product-image" />
                      </div>
                      <h5 className="product-name">Screwdriver</h5>
                    </div>
                    <div className="product-card">
                      <div className="image-container">
                        <img src="img/Wrench.jpg" alt="Product Name" className="product-image" />
                      </div>
                      <h5 className="product-name">Wrench (Spanner)</h5>
                    </div>
                    <div className="product-card">
                      <div className="image-container">
                        <img src="img/Drill.png" alt="Product Name" className="product-image" />
                      </div>
                      <h5 className="product-name">Drill machine</h5>
                    </div>

                    <div className="product-card">
                      <div className="image-container">
                        <img src="img/level.png" alt="Product Name" className="product-image" />
                      </div>
                      <h5 className="product-name">Level (Spirit level)</h5>
                    </div>

                    <div className="product-card">
                      <div className="image-container">
                        <img src="img/steel-sheet.jpg" alt="Product Name" className="product-image" />
                      </div>
                      <h5 className="product-name">Steel Sheet</h5>
                    </div>

                    <div className="product-card">
                      <div className="image-container">
                        <img src="img/electrodes.jpg" alt="Product Name" className="product-image" />
                      </div>
                      <h5 className="product-name">Electrodes</h5>
                    </div>
                  </div>
                </div>
              </div>

						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  );
};
