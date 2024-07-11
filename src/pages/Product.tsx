
import ProductContainer from "@/components/product/ProductContainer";
import Container from "@/components/ui/Container";


const Product = () =>{
    return(
        <Container>
            <h1 className="text-center text-3xl font-semibold my-10">Our Products</h1>
            <ProductContainer/>
        </Container>
    )
};

export default Product;