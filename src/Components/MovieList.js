import MovieCard from './MovieCard';
import { Col,Container,Row} from "react-bootstrap";
const MovieList = ({movies}) => {
    return (

      <Container>
     <Row>
     {
            movies.map((item) => {
                return( 
                     <Col md={4}>
                <MovieCard movie={item} />
            </Col>)

            })
     }
</Row>

     </Container>

    );
   };
   export default  MovieList; 