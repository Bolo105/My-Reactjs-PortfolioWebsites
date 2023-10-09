import React from 'react'
import about1 from '../buildImg/about1.jpg'
import styled from 'styled-components'

const Btn = styled.a`
   color: #fff;
   background-color:  #68a0d2;
   padding: 10px 20px;
   border-radius: 5px;
   display: inline-block;
   &:hover {
    background-color: #96b9d8;
    color: #fff;
   }
`;

export const BuildAbout = () => {
  return (
    <section className="section about my-5 py-5">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-lg-6">
				<img src={about1} alt="" className="img-fluid rounded shadow w-100" />
			</div>
			
			<div className="col-lg-6">
				<div className="pl-3 mt-5 mt-lg-0">
					<h2 className="mt-1 mb-3">We Provide the Best Services Ever </h2>
					<p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, labore reiciendis. Assumenda eos quod animi! Soluta nesciunt inventore dolores excepturi provident, culpa beatae tempora, explicabo corporis quibusdam corrupti. Autem, quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum dolor, ipsa perferendis porro doloribus obcaecati placeat natus iste odio est non earum?"</p>
					<Btn href="#/" className="btn btn-main">Learn More<i className="fa fa-angle-right ml-2"></i></Btn>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}